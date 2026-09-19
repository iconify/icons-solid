import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b73g4x-ms.css';
import '../../css/v/v8ghhzb6u.css';
import '../../css/c/cuc5u4bhr.css';
import '../../css/t/tl_heabyr.css';
import '../../css/o/oe707sb3m.css';
import '../../css/x/xq0un1dvd.css';
import '../../css/r/rfgq-j9ry.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b73g4x-ms"/><path class="v8ghhzb6u"/><path class="cuc5u4bhr"/><path class="tl_heabyr"/><path class="oe707sb3m"/><path class="xq0un1dvd"/><path class="rfgq-j9ry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:custard"} {...others} />);
}

export default Component;
