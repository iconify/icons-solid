import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu9s20i9j.css';
import '../../css/a/aw9rmcz9o.css';
import '../../css/z/zaosl5byf.css';
import '../../css/v/v-r7s_bat.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hu9s20i9j"/><path class="aw9rmcz9o"/><path class="zaosl5byf"/><path class="v-r7s_bat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ae-1x1"} {...others} />);
}

export default Component;
