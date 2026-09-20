import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zb8-kubni.css';
import '../../css/w/wq2ys5qgg.css';
import '../../css/w/wqs4pcc9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zb8-kubni"/><path class="wq2ys5qgg"/><path class="wqs4pcc9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:file-cross"} {...others} />);
}

export default Component;
