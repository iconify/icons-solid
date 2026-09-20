import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p8gxcvbkv.css';
import '../../css/y/yxub042gf.css';
import '../../css/k/k-6h5bc3a.css';
import '../../css/y/yqmotfmyy.css';
import '../../css/b/b1nxqifcp.css';
import '../../css/z/zy4x83b9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p8gxcvbkv"/><path class="yxub042gf"/><path class="k-6h5bc3a"/><path class="yqmotfmyy"/><path class="b1nxqifcp"/><path class="zy4x83b9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-3-line-duotone"} {...others} />);
}

export default Component;
