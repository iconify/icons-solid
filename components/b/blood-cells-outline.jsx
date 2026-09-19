import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xnwfqccsn.css';
import '../../css/i/i7vtvugda.css';
import '../../css/y/ygy_erbnr.css';
import '../../css/y/y4sds4b0k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="xnwfqccsn"/><path clip-rule="evenodd" class="i7vtvugda"/><path class="ygy_erbnr"/><path clip-rule="evenodd" class="y4sds4b0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-cells-outline"} {...others} />);
}

export default Component;
