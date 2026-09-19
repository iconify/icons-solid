import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e2cpkrb0m.css';
import '../../css/k/kdmio7boq.css';
import '../../css/e/esyo-ccry.css';
import '../../css/z/zizb71zos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e2cpkrb0m"/><path class="kdmio7boq"/><path class="esyo-ccry"/><path class="zizb71zos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:move-to"} {...others} />);
}

export default Component;
