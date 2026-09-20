import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqg_y98-f.css';
import '../../css/y/yy96u41yg.css';
import '../../css/e/e9usumb6x.css';
import '../../css/c/c8kh9nthq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fqg_y98-f"/><path class="yy96u41yg"/><path class="e9usumb6x"/><path class="c8kh9nthq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:shopping-cart-3"} {...others} />);
}

export default Component;
