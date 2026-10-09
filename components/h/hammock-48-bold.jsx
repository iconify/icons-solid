import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2nbzfjyr.css';
import '../../css/e/e-kvk2brc.css';
import '../../css/q/q7lsyebqx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r2nbzfjyr"/><path class="e-kvk2brc"/><path class="q7lsyebqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hammock-48-bold"} {...others} />);
}

export default Component;
