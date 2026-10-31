import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wtma-w-nc.css';
import '../../css/v/v2daosb8o.css';
import '../../css/s/stezfm7vs.css';
import '../../css/s/sahnepblt.css';
import '../../css/g/gak_websu.css';
import '../../css/x/xn0nxebad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow wtma-w-nc"/><path class="v2daosb8o wm-shadow"/><path class="stezfm7vs"/><path class="sahnepblt"/><path class="gak_websu"/><path class="wm-s xn0nxebad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:copy-check"} {...others} />);
}

export default Component;
