import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thafg6bsi.css';
import '../../css/q/qglubxbcs.css';
import '../../css/l/lnfvw2unm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="thafg6bsi"/><path class="qglubxbcs"/><path class="lnfvw2unm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trowel-48"} {...others} />);
}

export default Component;
