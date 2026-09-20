import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmxhs-b4r.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="nmxhs-b4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-virtual-reality-gaming-virtual-gear-controller-reality-games-headset-technology-vr-eyewear"} {...others} />);
}

export default Component;
