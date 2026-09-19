import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/td81zzyxq.css';
import '../../css/i/i9m89s9zq.css';
import '../../css/z/zxp0ecb1d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="td81zzyxq"/><path class="i9m89s9zq"/><path class="zxp0ecb1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:map-pin-search"} {...others} />);
}

export default Component;
