import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srl1peb-m.css';
import '../../css/m/mc_wqqb6u.css';
import '../../css/s/sax0i5bib.css';
import '../../css/g/gkj9o8bkh.css';
import '../../css/i/idzw_-bhc.css';
import '../../css/o/ogwm4h2ip.css';
import '../../css/w/wau-_6bgk.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 srl1peb-m"/><path class="clr-i-outline clr-i-outline-path-2 mc_wqqb6u"/><path class="clr-i-outline clr-i-outline-path-3 sax0i5bib"/><path class="clr-i-outline clr-i-outline-path-4 gkj9o8bkh"/><path class="clr-i-outline clr-i-outline-path-5 idzw_-bhc"/><path class="clr-i-outline clr-i-outline-path-6 ogwm4h2ip"/><path class="clr-i-outline clr-i-outline-path-7 wau-_6bgk"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:cloud-traffic-line"} {...others} />);
}

export default Component;
