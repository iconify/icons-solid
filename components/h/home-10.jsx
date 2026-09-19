import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o_e9bzw-o.css';
import '../../css/o/oszh--blj.css';
import '../../css/h/hrr5vnrqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o_e9bzw-o"/><path class="oszh--blj"/><path class="hrr5vnrqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:home-10"} {...others} />);
}

export default Component;
