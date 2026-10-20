import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t55dglbwd.css';
import '../../css/i/i2dsa1fpp.css';
import '../../css/m/mpef91b-c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t55dglbwd"/><path class="i2dsa1fpp"/><path class="mpef91b-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:passkey-48-bold"} {...others} />);
}

export default Component;
