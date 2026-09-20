import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lk9telbnu.css';
import '../../css/v/vixhfvz2m.css';
import '../../css/b/btqcpzbtb.css';
import '../../css/x/xzzhcml5d.css';
import '../../css/w/wqvapabeo.css';
import '../../css/f/fnns8ub_h.css';
import '../../css/b/bn06bzbqo.css';
import '../../css/b/bnqha65vh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lk9telbnu"/><path class="vixhfvz2m"/><path clip-rule="evenodd" class="btqcpzbtb"/><path class="xzzhcml5d"/><path class="wqvapabeo"/><path class="fnns8ub_h"/><path class="bn06bzbqo"/><path class="bnqha65vh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:planet-2-outline"} {...others} />);
}

export default Component;
