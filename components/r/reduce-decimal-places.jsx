import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/n/nbai-vk7r.css';
import '../../css/n/n2q61zvak.css';
import '../../css/w/wku1twfix.css';
import '../../css/k/k-w74vgau.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="nbai-vk7r"/><path class="n2q61zvak"/><path class="wku1twfix"/><path class="k-w74vgau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:reduce-decimal-places"} {...others} />);
}

export default Component;
