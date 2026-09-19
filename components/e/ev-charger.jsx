import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mw8m2y0gt.css';
import '../../css/w/w9_q9oy6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mw8m2y0gt"/><path class="w9_q9oy6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ev-charger"} {...others} />);
}

export default Component;
