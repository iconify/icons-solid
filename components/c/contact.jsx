import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r1l5kusty.css';
import '../../css/m/me_e7ub5q.css';
import '../../css/d/dzst6eb1a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="r1l5kusty"/><path class="me_e7ub5q"/><path class="dzst6eb1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:contact"} {...others} />);
}

export default Component;
