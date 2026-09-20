import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzxh4cr4a.css';
import '../../css/w/wk3-hhwly.css';
import '../../css/i/ihb45bshu.css';
import '../../css/h/h2whj1b4y.css';
import '../../css/z/z04drlb1l.css';
import '../../css/i/ist51dbev.css';
import '../../css/f/fmz0b6m9v.css';
import '../../css/p/po_x9ddet.css';
import '../../css/l/l-v-f7u4a.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vzxh4cr4a"/><path class="wk3-hhwly"/><path class="ihb45bshu"/><path class="h2whj1b4y"/><g class="z04drlb1l"><path class="ist51dbev"/><path class="fmz0b6m9v"/><path class="po_x9ddet"/><path class="l-v-f7u4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:earthquake"} {...others} />);
}

export default Component;
