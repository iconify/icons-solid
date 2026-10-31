import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy7879nbj.css';
import '../../css/k/kp6rhw96h.css';
import '../../css/w/waq7j53kz.css';
import '../../css/v/va2xzgb_k.css';
import '../../css/b/btl0gxbsw.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="wy7879nbj"/><path class="kp6rhw96h"/><path class="waq7j53kz"/><path class="va2xzgb_k"/><path class="btl0gxbsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:bonaire"} {...others} />);
}

export default Component;
