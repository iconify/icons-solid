import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jrb-0lehi.css';
import '../../css/v/vzq04ybzr.css';
import '../../css/r/rychkwc6r.css';
import '../../css/t/tmt2lc9xn.css';
import '../../css/i/ip3-7zudw.css';
import '../../css/c/cb8_mkbdm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jrb-0lehi"/><path clip-rule="evenodd" class="vzq04ybzr"/><path clip-rule="evenodd" class="rychkwc6r"/><path clip-rule="evenodd" class="tmt2lc9xn"/><path class="ip3-7zudw"/><path class="cb8_mkbdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:shop-cashier"} {...others} />);
}

export default Component;
