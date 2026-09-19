import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kw8enf78q.css';
import '../../css/v/vkfcnv4wi.css';
import '../../css/q/qbzh04khg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kw8enf78q"/><path class="vkfcnv4wi"/><path class="qbzh04khg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:camera-smile-02"} {...others} />);
}

export default Component;
