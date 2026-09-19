import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhr-6vbfw.css';
import '../../css/j/j5m1tbwim.css';
import '../../css/f/feymi_b7e.css';
import '../../css/i/ijbvxkalf.css';
import '../../css/v/v2iyeeb7t.css';
import '../../css/l/ld-4n__fo.css';
import '../../css/m/manaa2bye.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="lhr-6vbfw"><path class="j5m1tbwim"/><path class="feymi_b7e"/><path class="ijbvxkalf"/><path class="v2iyeeb7t"/><path class="ld-4n__fo"/><rect class="manaa2bye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:bag"} {...others} />);
}

export default Component;
