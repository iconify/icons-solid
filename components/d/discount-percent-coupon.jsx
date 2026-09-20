import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2onk_b4t.css';
import '../../css/h/h_122psqo.css';
import '../../css/v/vq2nbvb9b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="f2onk_b4t"/><path class="h_122psqo"/><path class="vq2nbvb9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:discount-percent-coupon"} {...others} />);
}

export default Component;
