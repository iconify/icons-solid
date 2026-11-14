import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lqzqcbbfi.css';
import '../../css/q/q1af_wb5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lqzqcbbfi"/><path class="q1af_wb5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:vision"} {...others} />);
}

export default Component;
