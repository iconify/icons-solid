import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k81i2obvv.css';
import '../../css/e/em283yboy.css';
import '../../css/t/tt8fklbvo.css';
import '../../css/m/mf-3ce6ro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="k81i2obvv"/><path class="em283yboy wm-shadow"/><path class="tt8fklbvo"/><path class="mf-3ce6ro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:armchair-engrave"} {...others} />);
}

export default Component;
