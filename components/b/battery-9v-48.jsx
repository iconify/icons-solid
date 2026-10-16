import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gerffvb_e.css';
import '../../css/v/v5ofbw7zr.css';
import '../../css/m/m91h_kbuv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gerffvb_e"/><path class="v5ofbw7zr"/><path class="m91h_kbuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-9v-48"} {...others} />);
}

export default Component;
