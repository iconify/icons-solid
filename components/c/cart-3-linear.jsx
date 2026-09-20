import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yxub042gf.css';
import '../../css/c/cqj5tpb-u.css';
import '../../css/k/k-6h5bc3a.css';
import '../../css/a/a5lu9cbol.css';
import '../../css/m/mr-7tobra.css';
import '../../css/v/vxf2a878x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yxub042gf"/><path class="cqj5tpb-u"/><path class="k-6h5bc3a"/><path class="a5lu9cbol"/><path class="mr-7tobra"/><path class="vxf2a878x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-3-linear"} {...others} />);
}

export default Component;
