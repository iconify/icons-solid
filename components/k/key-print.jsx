import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vgq9s-_5c.css';
import '../../css/k/kg6whmtsp.css';
import '../../css/x/x_c_7bkus.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="vgq9s-_5c"/><path clip-rule="evenodd" class="kg6whmtsp"/><path clip-rule="evenodd" class="x_c_7bkus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:key-print"} {...others} />);
}

export default Component;
