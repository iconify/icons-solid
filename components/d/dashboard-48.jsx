import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-zbgc76c.css';
import '../../css/n/ny48sabtr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f-zbgc76c"/><path class="ny48sabtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dashboard-48"} {...others} />);
}

export default Component;
