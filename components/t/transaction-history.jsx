import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/ly3o8obks.css';
import '../../css/z/zffbwxb-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ly3o8obks"/><path class="zffbwxb-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:transaction-history"} {...others} />);
}

export default Component;
