import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ix92dhgob.css';
import '../../css/x/xgikp8vnr.css';
import '../../css/l/lupbgxb_z.css';
import '../../css/t/t8828n_8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ix92dhgob"/><path class="xgikp8vnr"/><path class="lupbgxb_z"/><path class="t8828n_8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-home-angle-outline"} {...others} />);
}

export default Component;
