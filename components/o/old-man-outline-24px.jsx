import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vpv62rbtq.css';
import '../../css/f/fy49u-boj.css';
import '../../css/e/e_3jt1rft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vpv62rbtq"/><path clip-rule="evenodd" class="fy49u-boj"/><path class="e_3jt1rft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:old-man-outline-24px"} {...others} />);
}

export default Component;
