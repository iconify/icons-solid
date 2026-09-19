import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qjr1vkifv.css';
import '../../css/c/c5l9o1tad.css';
import '../../css/t/tk5wq2sfl.css';
import '../../css/j/jzakqabcy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qjr1vkifv"/><path clip-rule="evenodd" class="c5l9o1tad"/><path class="tk5wq2sfl"/><path clip-rule="evenodd" class="jzakqabcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:low-income-level-outline"} {...others} />);
}

export default Component;
