import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/ltlggzedl.css';
import '../../css/k/ke7dzdbtz.css';
import '../../css/f/flwbdztss.css';
import '../../css/i/isdq3ll-w.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/v/vi7r50kxj.css';
import '../../css/t/tuplv7bpa.css';
import '../../css/a/anr0hfbjy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ltlggzedl"/><path class="ke7dzdbtz wm-s"/><path class="flwbdztss"/><path class="isdq3ll-w wm-shine"/><path class="ljeitrr-k wm-k"/><path class="vi7r50kxj wm-s"/><path class="tuplv7bpa"/><path class="anr0hfbjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:user-heart"} {...others} />);
}

export default Component;
