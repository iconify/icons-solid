import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q_4v1rsio.css';
import '../../css/q/qh73v7bag.css';
import '../../css/i/i-gcjwb_i.css';
import '../../css/l/l-8vobb6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="q_4v1rsio wm-k"/><path class="qh73v7bag wm-a"/><path class="i-gcjwb_i"/><path class="l-8vobb6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:diya"} {...others} />);
}

export default Component;
