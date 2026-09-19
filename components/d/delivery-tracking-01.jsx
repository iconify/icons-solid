import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yateppugv.css';
import '../../css/e/e1h8zkb4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yateppugv"/><path class="e1h8zkb4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:delivery-tracking-01"} {...others} />);
}

export default Component;
