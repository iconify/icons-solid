import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtqww-yin.css';
import '../../css/r/rjus3cinc.css';
import '../../css/v/v150sab8p.css';
import '../../css/f/fpji7zb_v.css';
import '../../css/i/ikv41j_4a.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/y/y68eo6mry.css';
import '../../css/s/snnt3ubbv.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGntIp2c9H" class="xtqww-yin"/></defs><use href="#SVGntIp2c9H"/><circle class="rjus3cinc"/><circle class="v150sab8p"/><circle class="fpji7zb_v"/><path class="ikv41j_4a"/><use href="#SVGntIp2c9H"/><g class="brzn_0bpr"><circle class="y68eo6mry"/><path class="snnt3ubbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-holding-back-tears"} {...others} />);
}

export default Component;
