import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/b/bzrb3cclf.css';
import '../../css/e/eaw7s1b3z.css';
import '../../css/r/rrm7ku6ak.css';
import '../../css/h/hnryn1bmq.css';
import '../../css/q/q26zb0bxf.css';
import '../../css/q/qpdc9nvta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG88gcoeYi" cx="7.28" cy="6.18" r="25.05" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="bzrb3cclf wm-shadow"/><path fill="url(#SVG88gcoeYi)" class="eaw7s1b3z wm-k"/><path class="rrm7ku6ak wm-k"/><path class="hnryn1bmq wm-k"/><path class="q26zb0bxf wm-shine"/><path class="qpdc9nvta wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:paisley"} {...others} />);
}

export default Component;
