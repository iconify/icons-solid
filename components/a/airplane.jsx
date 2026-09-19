import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo-j068ov.css';
import '../../css/c/cujh-cb3j.css';
import '../../css/z/zj9g_cb3z.css';
import '../../css/q/qi6-mdk2j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uo-j068ov"/><path class="cujh-cb3j"/><path class="zj9g_cb3z"/><path class="qi6-mdk2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:airplane"} {...others} />);
}

export default Component;
