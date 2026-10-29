import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pfemu5b7e.css';
import '../../css/h/hbpbqdaxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="pfemu5b7e wm-k"/><path class="hbpbqdaxk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cloud-moon"} {...others} />);
}

export default Component;
