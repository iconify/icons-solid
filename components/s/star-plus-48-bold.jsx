import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9furfe2z.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/u/u4_rd0b0p.css';
import '../../css/t/tlvvk8-lt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c9furfe2z"/><path class="hwjgqrbah"/><path class="u4_rd0b0p"/><path class="tlvvk8-lt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:star-plus-48-bold"} {...others} />);
}

export default Component;
