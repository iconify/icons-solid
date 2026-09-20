import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tm-thgbjd.css';
import '../../css/z/zh2nf-bwc.css';
import '../../css/k/kvez5x9jo.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="cuyn6tgcc"><path class="tm-thgbjd"/><path class="zh2nf-bwc"/><path class="kvez5x9jo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:layers-filled"} {...others} />);
}

export default Component;
