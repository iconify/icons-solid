import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bczqgfbnq.css';
import '../../css/m/m5en-zbcw.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="bczqgfbnq"/><path clip-rule="evenodd" class="m5en-zbcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:gear-filled"} {...others} />);
}

export default Component;
