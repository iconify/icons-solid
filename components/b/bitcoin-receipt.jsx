import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l4248uhqs.css';
import '../../css/d/d5tuc-v4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l4248uhqs"/><path class="d5tuc-v4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-receipt"} {...others} />);
}

export default Component;
