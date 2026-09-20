import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-vdk0s_v.css';
import '../../css/z/z0v-de56k.css';
import '../../css/h/hxkc6pbym.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="l-vdk0s_v"/><path class="z0v-de56k"/><path class="hxkc6pbym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:signal"} {...others} />);
}

export default Component;
