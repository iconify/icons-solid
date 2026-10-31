import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/psob7xbsm.css';
import '../../css/f/f2ak7-5gi.css';
import '../../css/o/on0ts-5zi.css';
import '../../css/c/coff_0a1c.css';
import '../../css/x/x9y218bfr.css';
import '../../css/x/xc_je6bwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="psob7xbsm"/><path class="f2ak7-5gi"/><path class="on0ts-5zi wm-shine"/><path class="coff_0a1c wm-k"/><path class="wm-a x9y218bfr"/><path class="wm-deco xc_je6bwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:address-book"} {...others} />);
}

export default Component;
