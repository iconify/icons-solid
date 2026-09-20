import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qlk5m1b8o.css';
import '../../css/p/pzuhhh1if.css';
import '../../css/p/pupkd_1ls.css';
import '../../css/j/jbkl3jbof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qlk5m1b8o"/><path class="pzuhhh1if"/><circle class="pupkd_1ls"/><circle class="jbkl3jbof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:shopping-cart"} {...others} />);
}

export default Component;
