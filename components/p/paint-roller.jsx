import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rdqyx1m-i.css';
import '../../css/k/k75sbgkul.css';
import '../../css/h/hrbbo3b9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rdqyx1m-i"/><path class="k75sbgkul"/><path class="hrbbo3b9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:paint-roller"} {...others} />);
}

export default Component;
