import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p2iw4076h.css';
import '../../css/z/zctojbtal.css';
import '../../css/n/n6df88byo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p2iw4076h"/><path class="zctojbtal"/><path class="n6df88byo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cash-02"} {...others} />);
}

export default Component;
