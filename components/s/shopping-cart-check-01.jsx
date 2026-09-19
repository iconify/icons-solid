import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kx8v89bdy.css';
import '../../css/e/eskygmzuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kx8v89bdy"/><path class="eskygmzuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-cart-check-01"} {...others} />);
}

export default Component;
