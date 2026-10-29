import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/unl3agsie.css';
import '../../css/u/uztpbxahe.css';
import '../../css/k/kmf2obczo.css';
import '../../css/x/xgzbdsjfp.css';
import '../../css/t/tjd70lztj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="unl3agsie wm-k"/><path class="uztpbxahe wm-a"/><path class="kmf2obczo wm-k"/><path class="xgzbdsjfp"/><path class="tjd70lztj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chinese-knot"} {...others} />);
}

export default Component;
