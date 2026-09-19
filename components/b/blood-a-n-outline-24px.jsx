import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bw8g9_b8v.css';
import '../../css/l/l15qbrbre.css';
import '../../css/v/v4s2axqse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bw8g9_b8v"/><path class="l15qbrbre"/><path clip-rule="evenodd" class="v4s2axqse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-a-n-outline-24px"} {...others} />);
}

export default Component;
