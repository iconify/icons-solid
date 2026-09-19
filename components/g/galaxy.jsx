import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e4l6s_b1d.css';
import '../../css/w/wuft_1bog.css';
import '../../css/q/qy6mi32jc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e4l6s_b1d"/><path class="wuft_1bog"/><path class="qy6mi32jc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:galaxy"} {...others} />);
}

export default Component;
