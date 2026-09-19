import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l0odr6zsw.css';
import '../../css/d/dz_acn-zs.css';
import '../../css/f/f78tv89nt.css';
import '../../css/m/m4m9b5sui.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><rect class="l0odr6zsw"/><path clip-rule="evenodd" class="dz_acn-zs"/><path clip-rule="evenodd" class="f78tv89nt"/><path class="m4m9b5sui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:calendar-print"} {...others} />);
}

export default Component;
