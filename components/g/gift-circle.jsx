import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/j/jfip7cu7j.css';
import '../../css/d/d-vnzkvhk.css';
import '../../css/q/q069o1bak.css';
import '../../css/z/zudxtebic.css';
import '../../css/n/nsqpiacms.css';
import '../../css/f/fgjwwczuh.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path clip-rule="evenodd" class="jfip7cu7j"/><path clip-rule="evenodd" class="d-vnzkvhk"/><path class="q069o1bak"/><path class="zudxtebic"/><path clip-rule="evenodd" class="nsqpiacms"/><path clip-rule="evenodd" class="fgjwwczuh"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:gift-circle"} {...others} />);
}

export default Component;
