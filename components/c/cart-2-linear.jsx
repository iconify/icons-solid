import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yxub042gf.css';
import '../../css/k/k-6h5bc3a.css';
import '../../css/s/s3uqygbkb.css';
import '../../css/c/cqj5tpb-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yxub042gf"/><path class="k-6h5bc3a"/><path class="s3uqygbkb"/><path class="cqj5tpb-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-2-linear"} {...others} />);
}

export default Component;
