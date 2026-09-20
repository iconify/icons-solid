import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ibfkhubdy.css';
import '../../css/f/fbpplkb3k.css';
import '../../css/f/fya7nszxg.css';
import '../../css/f/fj39edg9a.css';
import '../../css/k/kybbyt4wx.css';
import '../../css/f/f_hvwcoce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ibfkhubdy"/><path class="fbpplkb3k"/><path class="fya7nszxg"/><path class="fj39edg9a"/><path class="kybbyt4wx"/><path class="f_hvwcoce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:facemask-circle-bold-duotone"} {...others} />);
}

export default Component;
