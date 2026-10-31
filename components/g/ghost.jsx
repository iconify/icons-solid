import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dydj80b_d.css';
import '../../css/m/mh9_xvp4g.css';
import '../../css/u/uw0unpbfy.css';
import '../../css/k/k5ujm-b2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="dydj80b_d wm-shadow"/><path class="mh9_xvp4g wm-shadow"/><path class="uw0unpbfy"/><path class="k5ujm-b2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:ghost"} {...others} />);
}

export default Component;
