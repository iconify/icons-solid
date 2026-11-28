import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y34y86l8t.css';
import '../../css/w/wrvij_8zr.css';
import '../../css/v/vs_tmxb_k.css';
import '../../css/o/oj2tivb2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="y34y86l8t"/><path class="wrvij_8zr"/><path class="vs_tmxb_k"/><path class="oj2tivb2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gate-buffer-tri-state"} {...others} />);
}

export default Component;
