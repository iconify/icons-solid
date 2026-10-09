import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp7-jacac.css';
import '../../css/r/rmei1lbaz.css';
import '../../css/t/txgfsobga.css';
import '../../css/v/vqtn4ybkd.css';
import '../../css/a/a97kokbba.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mp7-jacac"/><path class="rmei1lbaz"/><path class="txgfsobga"/><path class="vqtn4ybkd"/><path class="a97kokbba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:helicopter-48"} {...others} />);
}

export default Component;
