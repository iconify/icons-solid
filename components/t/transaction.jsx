import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/k/kwuihk8vk.css';
import '../../css/v/v5beli-4s.css';
import '../../css/r/r1cxy2bpc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="utf5_xbzs"/><path class="kwuihk8vk"/><path class="v5beli-4s"/><path class="r1cxy2bpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:transaction"} {...others} />);
}

export default Component;
