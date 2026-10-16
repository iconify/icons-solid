import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itjermisk.css';
import '../../css/x/xu0oo2s1z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="itjermisk"/><path class="xu0oo2s1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-compressor-20-bold"} {...others} />);
}

export default Component;
