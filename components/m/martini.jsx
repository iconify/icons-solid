import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qg4pciyrw.css';
import '../../css/r/rt0e5mb6z.css';
import '../../css/g/ggrjl0bje.css';
import '../../css/s/sxmtimb3p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qg4pciyrw wm-shadow"/><path class="rt0e5mb6z"/><path class="ggrjl0bje"/><path class="sxmtimb3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:martini"} {...others} />);
}

export default Component;
