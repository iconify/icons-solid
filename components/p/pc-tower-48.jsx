import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-flw2bql.css';
import '../../css/v/vbmukxb1v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m-flw2bql"/><path class="vbmukxb1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pc-tower-48"} {...others} />);
}

export default Component;
