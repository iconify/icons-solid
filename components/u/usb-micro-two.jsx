import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/i40bz1b-z.css';
import '../../css/w/w5zhu6byd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="i40bz1b-z"/><path class="w5zhu6byd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:usb-micro-two"} {...others} />);
}

export default Component;
