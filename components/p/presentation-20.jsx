import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pze-k_dmv.css';
import '../../css/a/ad5vgcley.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pze-k_dmv"/><path class="ad5vgcley"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:presentation-20"} {...others} />);
}

export default Component;
