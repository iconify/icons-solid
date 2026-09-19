import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dp0kg2b8x.css';
import '../../css/a/a6l7ac95q.css';
import '../../css/b/bpn_39bkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dp0kg2b8x"/><path class="a6l7ac95q"/><path class="bpn_39bkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tablet-smartphone"} {...others} />);
}

export default Component;
