import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uz7y-qbqy.css';
import '../../css/b/bnnp0ybog.css';
import '../../css/k/kybbyt4wx.css';
import '../../css/f/f_hvwcoce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="uz7y-qbqy"/><path clip-rule="evenodd" class="bnnp0ybog"/><path class="kybbyt4wx"/><path class="f_hvwcoce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sticker-smile-square-bold-duotone"} {...others} />);
}

export default Component;
