import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o_u0y8bmx.css';
import '../../css/d/de9gu_b1y.css';
import '../../css/f/fw5zavb2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="o_u0y8bmx"/><circle class="de9gu_b1y"/><path class="fw5zavb2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:monocle"} {...others} />);
}

export default Component;
