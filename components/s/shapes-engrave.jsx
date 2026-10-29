import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mm3aocipf.css';
import '../../css/w/wjzwaub_a.css';
import '../../css/l/l7dao_uee.css';
import '../../css/n/n5z9vnbeb.css';
import '../../css/x/x9x785x5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mm3aocipf wm-k"/><path class="wjzwaub_a wm-a"/><path class="l7dao_uee wm-shadow"/><path class="n5z9vnbeb wm-k"/><path class="wm-a x9x785x5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shapes-engrave"} {...others} />);
}

export default Component;
