import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j2l6nrkld.css';
import '../../css/s/s7875pb6y.css';
import '../../css/f/flt-a_pfe.css';
import '../../css/t/tu2k-znyw.css';
import '../../css/y/ykk1_gx4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="j2l6nrkld"/><path class="s7875pb6y"/><path class="flt-a_pfe"/><path class="tu2k-znyw"/><path class="ykk1_gx4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-cells-merge-bold"} {...others} />);
}

export default Component;
