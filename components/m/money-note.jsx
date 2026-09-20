import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cuiniwbro.css';
import '../../css/j/jlcyzeb2p.css';
import '../../css/r/r5ykmgbft.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cuiniwbro"/><path class="jlcyzeb2p"/><path clip-rule="evenodd" class="r5ykmgbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:money-note"} {...others} />);
}

export default Component;
