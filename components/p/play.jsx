import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/w/wf1cbx7sk.css';
import '../../css/q/qutzsb6ii.css';
import '../../css/a/a4gk-n6-m.css';
import '../../css/a/altx6wbbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQKyzYnbO" x1="10.55" x2="14.55" y1="3.55" y2="20.46" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wf1cbx7sk wm-k"/><path class="qutzsb6ii wm-deco"/><path fill="url(#SVGQKyzYnbO)" class="a4gk-n6-m wm-k"/><path class="altx6wbbr wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:play"} {...others} />);
}

export default Component;
