import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zzk2pzbsj.css';
import '../../css/w/wukorub_q.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="zzk2pzbsj"/><path class="wukorub_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:phone-incoming"} {...others} />);
}

export default Component;
