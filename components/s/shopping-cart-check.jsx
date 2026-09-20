import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/syl3tvbdl.css';
import '../../css/z/zv8_vrbvb.css';
import '../../css/w/wbvtzgrah.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="syl3tvbdl"/><path class="zv8_vrbvb"/><path class="wbvtzgrah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shopping-cart-check"} {...others} />);
}

export default Component;
