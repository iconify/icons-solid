import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dplnzz0rj.css';
import '../../css/u/uru1j_b_t.css';
import '../../css/k/k-xqiwbqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dplnzz0rj"/><path class="uru1j_b_t"/><path class="k-xqiwbqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-bottom-right-broken"} {...others} />);
}

export default Component;
