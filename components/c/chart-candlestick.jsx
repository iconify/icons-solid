import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qrfs4g8hl.css';
import '../../css/d/dlsgubbiy.css';
import '../../css/f/f6xse2b8y.css';
import '../../css/r/raqym_b5r.css';
import '../../css/g/g7fbn8vhw.css';
import '../../css/s/s2c-alb3u.css';
import '../../css/n/nkbkd5bmq.css';
import '../../css/k/kbhklyrvn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 11.4 13.84)" class="qrfs4g8hl"/><rect transform="matrix(0 -1 -1 0 19.24 15.73)" class="dlsgubbiy"/><path class="f6xse2b8y"/><path class="raqym_b5r"/><path class="g7fbn8vhw"/><path class="s2c-alb3u"/><rect transform="matrix(0 -1 -1 0 11.4 13.84)" class="nkbkd5bmq"/><rect transform="matrix(0 -1 -1 0 19.24 15.73)" class="kbhklyrvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-candlestick"} {...others} />);
}

export default Component;
