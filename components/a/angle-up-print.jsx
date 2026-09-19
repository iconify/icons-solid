import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xpd3oob2g.css';
import '../../css/j/j_sc5dbeu.css';
import '../../css/h/h69s6dnea.css';
import '../../css/a/a_tem7q8y.css';
import '../../css/g/ghiic7brw.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xpd3oob2g"/><path class="j_sc5dbeu"/><path class="h69s6dnea"/><path class="a_tem7q8y"/><path class="ghiic7brw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:angle-up-print"} {...others} />);
}

export default Component;
