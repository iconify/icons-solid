import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9j3dtsig.css';
import '../../css/d/dm0pmwfce.css';
import '../../css/d/d_czc4bgz.css';
import '../../css/j/ja581zbzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y9j3dtsig"/><path class="dm0pmwfce"/><path class="d_czc4bgz"/><path class="ja581zbzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shopping-cart-plus-duotone"} {...others} />);
}

export default Component;
