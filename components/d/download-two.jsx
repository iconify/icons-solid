import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/p9zkvvbfg.css';
import '../../css/v/vk-mer1ow.css';
import '../../css/z/ztkfpwi5j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="p9zkvvbfg"/><path class="vk-mer1ow"/><path class="ztkfpwi5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:download-two"} {...others} />);
}

export default Component;
