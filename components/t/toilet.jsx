import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp9j1o_0y.css';
import '../../css/u/uf_f1g_xb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tp9j1o_0y"/><path class="uf_f1g_xb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:toilet"} {...others} />);
}

export default Component;
