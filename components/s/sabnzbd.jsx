import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9x94cctu.css';
import '../../css/a/at5rj_bep.css';
import '../../css/p/ptimbzbqj.css';
import '../../css/v/vl66h63zb.css';

const viewBox = {"width":608,"height":608};
const content = `<g class="w9x94cctu"><path transform="matrix(0 2.665 -2.7482 0 1003.016 -1657.67)" class="at5rj_bep"/><path class="logo-arrow-outer ptimbzbqj"/><path class="logo-arrow-inner vl66h63zb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sabnzbd"} {...others} />);
}

export default Component;
