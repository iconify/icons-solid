import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/klm8nlh_b.css';
import '../../css/i/i_-yglb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="klm8nlh_b"/><path class="i_-yglb_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:shopping-bag-hand-bag-price-tag"} {...others} />);
}

export default Component;
