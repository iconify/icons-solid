import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/lr3oqwb_k.css';
import '../../css/t/thsdn8btu.css';
import '../../css/j/jpuzw0btv.css';
import '../../css/q/q4xil6tti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="lr3oqwb_k"/><path class="thsdn8btu"/><path class="jpuzw0btv"/><path class="q4xil6tti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:new-document-layer"} {...others} />);
}

export default Component;
