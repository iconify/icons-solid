import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw5w10zib.css';
import '../../css/s/s5u-maceu.css';
import '../../css/q/qkc80i2jm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yw5w10zib"/><path class="s5u-maceu"/><path class="qkc80i2jm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydro-turbine-48"} {...others} />);
}

export default Component;
