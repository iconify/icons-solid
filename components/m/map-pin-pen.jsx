import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/ji5sf-bhp.css';
import '../../css/i/i59jeg-at.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ji5sf-bhp"/><path class="i59jeg-at"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:map-pin-pen"} {...others} />);
}

export default Component;
