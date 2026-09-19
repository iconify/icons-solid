import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fzvp0ibac.css';
import '../../css/q/qpzakybpx.css';
import '../../css/p/p01jvacul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fzvp0ibac"/><path class="qpzakybpx"/><path class="p01jvacul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chrysler"} {...others} />);
}

export default Component;
