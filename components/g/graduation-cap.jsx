import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/u/udgu2g9vx.css';
import '../../css/c/cu-pxwblg.css';
import '../../css/m/mg5ewlksj.css';
import '../../css/k/knpmx2bhz.css';
import '../../css/r/rx8luqx8k.css';
import '../../css/a/a__jnvr0m.css';
import '../../css/p/pegep5ups.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="udgu2g9vx"/><path class="cu-pxwblg"/><path class="mg5ewlksj"/><path class="knpmx2bhz"/><path class="rx8luqx8k"/><path class="a__jnvr0m"/><path class="pegep5ups"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:graduation-cap"} {...others} />);
}

export default Component;
