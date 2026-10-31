import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/amzs2vygw.css';
import '../../css/f/fgl7d3b2i.css';
import '../../css/q/qj2ybmbte.css';
import '../../css/u/uqwdcjxkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="amzs2vygw wm-shadow"/><path class="fgl7d3b2i wm-shadow"/><path class="qj2ybmbte"/><path class="uqwdcjxkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:voicemail"} {...others} />);
}

export default Component;
