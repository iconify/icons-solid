import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kox3l5rcm.css';
import '../../css/y/y66huhbnz.css';
import '../../css/z/zaico2bqj.css';

const viewBox = {"width":28,"height":32};
const content = `<g class="cuyn6tgcc"><path class="kox3l5rcm"/><path class="y66huhbnz"/><path class="zaico2bqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:clipboard"} {...others} />);
}

export default Component;
