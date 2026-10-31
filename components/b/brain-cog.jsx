import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/ofrt68b1x.css';
import '../../css/u/umc_pnb9f.css';
import '../../css/h/ho7hc-hue.css';
import '../../css/w/wf8b8fb_u.css';
import '../../css/e/elv9_wbbz.css';
import '../../css/f/fs1s5sb_z.css';
import '../../css/v/v4wxs7bzx.css';
import '../../css/n/nqhujab-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ofrt68b1x wm-shadow"/><path class="umc_pnb9f wm-s"/><path class="ho7hc-hue wm-shadow"/><path class="wf8b8fb_u"/><path class="elv9_wbbz"/><path class="fs1s5sb_z wm-s"/><path class="v4wxs7bzx wm-s"/><path class="nqhujab-i wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:brain-cog"} {...others} />);
}

export default Component;
