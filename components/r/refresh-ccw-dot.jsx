import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u32exoa9z.css';
import '../../css/p/ps6deztrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u32exoa9z"/><path class="ps6deztrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:refresh-ccw-dot"} {...others} />);
}

export default Component;
