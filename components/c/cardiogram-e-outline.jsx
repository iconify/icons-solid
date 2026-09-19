import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8bh252mq.css';
import '../../css/p/p_ff4pbut.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="u8bh252mq"/><path clip-rule="evenodd" class="p_ff4pbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cardiogram-e-outline"} {...others} />);
}

export default Component;
