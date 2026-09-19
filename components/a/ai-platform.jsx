import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t5h_azk5i.css';
import '../../css/j/jnd-e9m6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="t5h_azk5i"/><path class="jnd-e9m6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:ai-platform"} {...others} />);
}

export default Component;
