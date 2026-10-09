import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lazjyk96p.css';
import '../../css/z/z8apakboq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lazjyk96p"/><path class="z8apakboq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-arc-furnace-48"} {...others} />);
}

export default Component;
