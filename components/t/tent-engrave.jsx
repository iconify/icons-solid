import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x4iq_5ybs.css';
import '../../css/p/ppi5x7mln.css';
import '../../css/q/qlf4-g8mc.css';
import '../../css/x/xlau4cdnj.css';
import '../../css/k/koqkggbqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k x4iq_5ybs"/><path class="ppi5x7mln wm-a"/><path class="qlf4-g8mc wm-shadow"/><path class="wm-k xlau4cdnj"/><path class="koqkggbqh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tent-engrave"} {...others} />);
}

export default Component;
