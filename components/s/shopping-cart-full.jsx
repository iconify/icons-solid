import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nts_w_vxu.css';
import '../../css/u/uusgd4s3b.css';
import '../../css/p/p24y51b_i.css';
import '../../css/c/csc8yzb1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nts_w_vxu"/><path class="uusgd4s3b"/><path class="p24y51b_i"/><path class="csc8yzb1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shopping-cart-full"} {...others} />);
}

export default Component;
