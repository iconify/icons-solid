import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2ghl_lxl.css';
import '../../css/z/zb-g-abte.css';
import '../../css/i/i0x2txbtb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w2ghl_lxl"/><path class="zb-g-abte"/><path class="i0x2txbtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-search-20-bold"} {...others} />);
}

export default Component;
