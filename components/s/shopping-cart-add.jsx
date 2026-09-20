import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puz4eh_ne.css';
import '../../css/w/wsqmqdbpx.css';
import '../../css/p/pop7_3cjw.css';
import '../../css/m/mrr_ff_5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="puz4eh_ne"/><path class="wsqmqdbpx"/><path class="pop7_3cjw"/><path class="mrr_ff_5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:shopping-cart-add"} {...others} />);
}

export default Component;
