import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy-rofhks.css';
import '../../css/u/uzpb98bpp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vy-rofhks"/><path class="uzpb98bpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pin-48-bold"} {...others} />);
}

export default Component;
