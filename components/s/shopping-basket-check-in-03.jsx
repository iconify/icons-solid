import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/urhi_s55q.css';
import '../../css/b/b_wp_jynk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="urhi_s55q"/><path class="b_wp_jynk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-basket-check-in-03"} {...others} />);
}

export default Component;
