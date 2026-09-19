import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a05wonbip.css';
import '../../css/c/c913fr9up.css';
import '../../css/c/chcv3v1yb.css';
import '../../css/v/vuehnbe_u.css';
import '../../css/u/ueukz9h4d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a05wonbip"/><path class="c913fr9up"/><path class="chcv3v1yb"/><path class="vuehnbe_u"/><path class="ueukz9h4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blacknib"} {...others} />);
}

export default Component;
