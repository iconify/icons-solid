import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7ulrkohs.css';
import '../../css/l/lajj_ldpv.css';
import '../../css/r/rdhhuro_z.css';
import '../../css/a/a_r4evb7u.css';
import '../../css/j/jn6isbc9z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j7ulrkohs"/><path class="lajj_ldpv"/><linearGradient id="SVG7wP44bFl" x1="-404.194" x2="290.652" y1="271.3" y2="271.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="rdhhuro_z"/><stop offset="1" class="a_r4evb7u"/></linearGradient><path fill="url(#SVG7wP44bFl)" class="jn6isbc9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pelican-panel"} {...others} />);
}

export default Component;
