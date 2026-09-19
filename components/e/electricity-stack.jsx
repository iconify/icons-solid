import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rfw4ffcyl.css';
import '../../css/w/w5jmllbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rfw4ffcyl"/><path class="w5jmllbgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:electricity-stack"} {...others} />);
}

export default Component;
