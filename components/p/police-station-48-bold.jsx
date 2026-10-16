import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf6_mjbtg.css';
import '../../css/r/rpy7blvsf.css';
import '../../css/y/yc61-tb7e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gf6_mjbtg"/><path class="rpy7blvsf"/><path class="yc61-tb7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:police-station-48-bold"} {...others} />);
}

export default Component;
