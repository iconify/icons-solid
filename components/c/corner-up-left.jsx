import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y-vo2hw9j.css';
import '../../css/v/v5b61-ocj.css';
import '../../css/d/d0nv4lbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="y-vo2hw9j"/><path class="v5b61-ocj"/><path class="d0nv4lbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:corner-up-left"} {...others} />);
}

export default Component;
