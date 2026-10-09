import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgfat0y1j.css';
import '../../css/v/voq389b8h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wgfat0y1j"/><path class="voq389b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:watch-20"} {...others} />);
}

export default Component;
