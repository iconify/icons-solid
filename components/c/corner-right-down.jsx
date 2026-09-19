import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ikrurffev.css';
import '../../css/z/zf-hn4bdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ikrurffev"/><path class="zf-hn4bdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:corner-right-down"} {...others} />);
}

export default Component;
