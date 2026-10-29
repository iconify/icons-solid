import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/ny6o60buq.css';
import '../../css/x/xft9x10os.css';
import '../../css/i/irqnl3b4f.css';
import '../../css/b/b0l52zb1j.css';
import '../../css/u/ui_lws96b.css';
import '../../css/y/yl22r9bbu.css';
import '../../css/c/cdc_phbqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ny6o60buq wm-k"/><path class="wm-a xft9x10os"/><path class="irqnl3b4f wm-shadow"/><path class="b0l52zb1j wm-k"/><path class="ui_lws96b wm-k"/><path class="wm-a yl22r9bbu"/><path class="cdc_phbqy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wallet-cards-engrave"} {...others} />);
}

export default Component;
