import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tfu_k-b9d.css';
import '../../css/a/a0216gb4i.css';
import '../../css/y/yl-1i7u7d.css';
import '../../css/u/u_nif7b-i.css';
import '../../css/s/sfp-qh-hh.css';
import '../../css/x/x74picb7l.css';
import '../../css/p/p5tutwb8w.css';
import '../../css/t/tehutdbmd.css';
import '../../css/t/tlo9755ie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tfu_k-b9d"/><path class="a0216gb4i wm-s"/><path class="yl-1i7u7d"/><path class="u_nif7b-i wm-shine"/><path class="sfp-qh-hh wm-k"/><path class="wm-s x74picb7l"/><path class="p5tutwb8w"/><path class="tehutdbmd"/><path class="tlo9755ie wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:moon-star"} {...others} />);
}

export default Component;
