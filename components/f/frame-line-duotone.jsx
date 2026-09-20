import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywqkc-b_i.css';
import '../../css/b/beu8enohc.css';
import '../../css/o/oqpf2r_po.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ywqkc-b_i"/><path class="beu8enohc"/><path class="oqpf2r_po"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:frame-line-duotone"} {...others} />);
}

export default Component;
