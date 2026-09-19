import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qxwgb7p4b.css';
import '../../css/j/j4on_51kq.css';
import '../../css/d/du1p5sbuh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qxwgb7p4b"/><path class="j4on_51kq"/><path clip-rule="evenodd" class="du1p5sbuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ecmo-outline-24px"} {...others} />);
}

export default Component;
