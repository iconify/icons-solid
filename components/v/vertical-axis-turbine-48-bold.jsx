import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj5h1jbsa.css';
import '../../css/i/ih47sreee.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fj5h1jbsa"/><path class="ih47sreee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vertical-axis-turbine-48-bold"} {...others} />);
}

export default Component;
