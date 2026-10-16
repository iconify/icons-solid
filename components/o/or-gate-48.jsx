import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdb70jjls.css';
import '../../css/t/tfdzc8bht.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wdb70jjls"/><path class="tfdzc8bht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:or-gate-48"} {...others} />);
}

export default Component;
