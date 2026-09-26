import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f6qigw2pw.css';
import '../../css/e/ev8ugkd_t.css';
import '../../css/z/z6yz7pi9b.css';
import '../../css/j/jq9k3yb_w.css';
import '../../css/t/t8c8lgbwt.css';
import '../../css/h/ha57j35ad.css';
import '../../css/r/rt4-gjbpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="f6qigw2pw"/><path class="ev8ugkd_t"/><path class="z6yz7pi9b"/><path class="jq9k3yb_w"/><path class="t8c8lgbwt"/><path class="ha57j35ad"/><path class="rt4-gjbpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:planet-4-bold"} {...others} />);
}

export default Component;
