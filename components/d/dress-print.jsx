import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kqvem9u7e.css';
import '../../css/i/iqdcki20w.css';
import '../../css/v/vsy6rtmax.css';
import '../../css/i/i7b6h4s-y.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kqvem9u7e"/><path clip-rule="evenodd" class="iqdcki20w"/><path clip-rule="evenodd" class="vsy6rtmax"/><path class="i7b6h4s-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:dress-print"} {...others} />);
}

export default Component;
