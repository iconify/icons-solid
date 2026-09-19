import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/np_bh75cy.css';
import '../../css/t/tuk_0nyui.css';
import '../../css/x/xsh8s3irr.css';
import '../../css/s/sb-on7i1d.css';
import '../../css/w/wdeuzrbxs.css';
import '../../css/r/rbfribbyd.css';
import '../../css/l/lc_m0ac4m.css';
import '../../css/h/hnj3yabsu.css';
import '../../css/y/yxc7w_8iq.css';
import '../../css/j/jpuxf6bot.css';
import '../../css/k/ktyp00msr.css';
import '../../css/l/lfip2bh9k.css';
import '../../css/l/l62ksrbmn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="np_bh75cy"/><path class="tuk_0nyui"/><path class="xsh8s3irr"/><path class="sb-on7i1d"/><path class="wdeuzrbxs"/><path class="rbfribbyd"/><path class="lc_m0ac4m"/><path class="hnj3yabsu"/><path class="yxc7w_8iq"/><path class="jpuxf6bot"/><path class="ktyp00msr"/><path class="lfip2bh9k"/><path class="l62ksrbmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-technologist-medium-dark"} {...others} />);
}

export default Component;
