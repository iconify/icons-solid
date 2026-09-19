import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pw_c9ebdo.css';
import '../../css/x/xh9tl8kkl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="pw_c9ebdo"/><path class="xh9tl8kkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:weight-kilograms"} {...others} />);
}

export default Component;
