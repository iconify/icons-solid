import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnhcupbsa.css';
import '../../css/f/f3bevmfxd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wnhcupbsa"/><path class="f3bevmfxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clamp-meter-20"} {...others} />);
}

export default Component;
