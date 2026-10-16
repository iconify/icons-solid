import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cy406sb7c.css';
import '../../css/e/e1grfmb0c.css';
import '../../css/r/rb4cb762a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cy406sb7c"/><path class="e1grfmb0c"/><path class="rb4cb762a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tow-truck-48-bold"} {...others} />);
}

export default Component;
