import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/ubjvj38hr.css';
import '../../css/l/l39lfuh0p.css';
import '../../css/b/bjo_w3b4x.css';
import '../../css/n/ntng2fbin.css';
import '../../css/f/f3tg6ebbt.css';
import '../../css/h/hj29fzolb.css';
import '../../css/b/b5et_bcgy.css';
import '../../css/z/z12nwlb8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ubjvj38hr"/><path class="l39lfuh0p"/><path class="bjo_w3b4x wm-shine"/><path class="ntng2fbin wm-k"/><path class="f3tg6ebbt wm-a"/><path class="hj29fzolb"/><path class="b5et_bcgy"/><path class="wm-shine z12nwlb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:ethernet-port"} {...others} />);
}

export default Component;
