import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hx69_kbqc.css';
import '../../css/i/ir6vg8bfg.css';
import '../../css/q/q57frabsb.css';
import '../../css/r/ri6-66b8q.css';
import '../../css/c/cx88pl2gf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hx69_kbqc wm-k"/><path class="ir6vg8bfg wm-k"/><path class="q57frabsb"/><path class="ri6-66b8q"/><path class="cx88pl2gf wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:champagne-toast"} {...others} />);
}

export default Component;
