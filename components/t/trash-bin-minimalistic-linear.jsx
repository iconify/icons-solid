import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kvdjm4bsr.css';
import '../../css/f/fh6a-dbrt.css';
import '../../css/u/u8po8xbhj.css';
import '../../css/p/p2-mbsbue.css';
import '../../css/w/w8w5t9ikw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kvdjm4bsr"/><path class="fh6a-dbrt"/><path class="u8po8xbhj"/><path class="p2-mbsbue"/><path class="w8w5t9ikw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trash-bin-minimalistic-linear"} {...others} />);
}

export default Component;
