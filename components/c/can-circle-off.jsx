import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/z/zbf23z33l.css';
import '../../css/j/j2qmstbqm.css';
import '../../css/f/fabrggbzi.css';
import '../../css/h/h0vor2f9a.css';
import '../../css/x/x7o6l7jax.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path class="zbf23z33l"/><path clip-rule="evenodd" class="j2qmstbqm"/><path clip-rule="evenodd" class="fabrggbzi"/><path class="h0vor2f9a"/><path class="x7o6l7jax"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:can-circle-off"} {...others} />);
}

export default Component;
