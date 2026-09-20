import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kn_bipmzk.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="kn_bipmzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-transportation-sail-ship-travel-boat-transportation-transport-ocean-ship-sea-water"} {...others} />);
}

export default Component;
