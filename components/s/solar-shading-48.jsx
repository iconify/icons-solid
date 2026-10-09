import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv2p86eoi.css';
import '../../css/q/qfryzomdr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tv2p86eoi"/><path class="qfryzomdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-shading-48"} {...others} />);
}

export default Component;
