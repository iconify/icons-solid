import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nh00vmbzc.css';
import '../../css/p/pj29wknyr.css';
import '../../css/z/zg4dsabzz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nh00vmbzc"/><path clip-rule="evenodd" class="pj29wknyr"/><path clip-rule="evenodd" class="zg4dsabzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:bot"} {...others} />);
}

export default Component;
