import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/noe6dcchn.css';
import '../../css/l/lwz7_bbuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="noe6dcchn"/><path class="lwz7_bbuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-mouse-pointer"} {...others} />);
}

export default Component;
