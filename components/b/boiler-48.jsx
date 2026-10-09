import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_kcw3bme.css';
import '../../css/z/zryj4abdk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l_kcw3bme"/><path class="zryj4abdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:boiler-48"} {...others} />);
}

export default Component;
