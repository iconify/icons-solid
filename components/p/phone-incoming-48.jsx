import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3j068ntp.css';
import '../../css/u/uwilteebl.css';
import '../../css/j/jeboob2cw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y3j068ntp"/><path class="uwilteebl"/><path class="jeboob2cw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-incoming-48"} {...others} />);
}

export default Component;
