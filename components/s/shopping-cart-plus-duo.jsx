import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tzbq4-b0s.css';
import '../../css/w/ww85m-21c.css';
import '../../css/a/apviizbjs.css';
import '../../css/o/ocnol1b_l.css';
import '../../css/e/e7ft8bcmq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tzbq4-b0s"/><path class="wm-a ww85m-21c"/><path class="apviizbjs wm-a"/><path class="ocnol1b_l"/><path class="e7ft8bcmq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shopping-cart-plus-duo"} {...others} />);
}

export default Component;
