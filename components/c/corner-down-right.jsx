import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o4bo6c_zp.css';
import '../../css/l/lop49sygl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o4bo6c_zp"/><path class="lop49sygl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:corner-down-right"} {...others} />);
}

export default Component;
