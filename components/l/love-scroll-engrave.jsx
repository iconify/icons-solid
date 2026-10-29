import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gj14zcz_s.css';
import '../../css/r/rr0xombdn.css';
import '../../css/o/o9xa_6bur.css';
import '../../css/v/vnuceub7r.css';
import '../../css/h/hbohdyb1x.css';
import '../../css/i/izocahotk.css';
import '../../css/n/npdbqluyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gj14zcz_s wm-k"/><path class="rr0xombdn wm-s"/><path class="o9xa_6bur wm-shadow"/><path class="vnuceub7r wm-k"/><path class="hbohdyb1x wm-a"/><path class="izocahotk wm-s"/><path class="npdbqluyk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:love-scroll-engrave"} {...others} />);
}

export default Component;
