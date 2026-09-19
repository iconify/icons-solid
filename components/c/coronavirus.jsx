import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/w8kvpjbaf.css';
import '../../css/j/j716il_vk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="w8kvpjbaf"/><path class="j716il_vk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:coronavirus"} {...others} />);
}

export default Component;
