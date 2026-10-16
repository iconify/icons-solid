import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etlms99xu.css';
import '../../css/e/edf1cpbtr.css';
import '../../css/q/qpjl1967d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="etlms99xu"/><path class="edf1cpbtr"/><path class="qpjl1967d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-battery-48-bold"} {...others} />);
}

export default Component;
