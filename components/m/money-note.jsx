import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/q/qa63lgbzc.css';
import '../../css/d/d94q5jz_l.css';
import '../../css/c/cuiniwbro.css';
import '../../css/j/jlcyzeb2p.css';
import '../../css/r/r5ykmgbft.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="qa63lgbzc"/><path clip-rule="evenodd" class="d94q5jz_l"/></g><path clip-rule="evenodd" class="cuiniwbro"/><path class="jlcyzeb2p"/><path clip-rule="evenodd" class="r5ykmgbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:money-note"} {...others} />);
}

export default Component;
