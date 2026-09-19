import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/maro3oy9t.css';
import '../../css/o/o8ztr_b6o.css';
import '../../css/p/p3scq4boq.css';
import '../../css/e/eu06bhbry.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="maro3oy9t"/><path class="o8ztr_b6o"/><path clip-rule="evenodd" class="p3scq4boq"/><path class="eu06bhbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:cart-print"} {...others} />);
}

export default Component;
