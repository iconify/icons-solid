import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/h-7-v0bln.css';
import '../../css/r/rwf6cybxx.css';
import '../../css/e/evqc3kb0b.css';
import '../../css/c/ch_iogbid.css';
import '../../css/w/wpjaoob0o.css';
import '../../css/l/lu-_g6b4r.css';
import '../../css/f/fzfm513hq.css';
import '../../css/q/qs72avldn.css';
import '../../css/i/icz8w1vxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="h-7-v0bln wm-shadow"/><path class="rwf6cybxx wm-s"/><path class="evqc3kb0b wm-shadow"/><path class="ch_iogbid"/><path class="wpjaoob0o"/><path class="lu-_g6b4r"/><path class="fzfm513hq wm-s"/><path class="qs72avldn wm-s"/><path class="icz8w1vxh wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:teapot"} {...others} />);
}

export default Component;
