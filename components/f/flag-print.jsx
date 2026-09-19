import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t12lt_bso.css';
import '../../css/o/opuctyblu.css';
import '../../css/o/omgkgqbgl.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="t12lt_bso"/><path clip-rule="evenodd" class="opuctyblu"/><path clip-rule="evenodd" class="omgkgqbgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:flag-print"} {...others} />);
}

export default Component;
