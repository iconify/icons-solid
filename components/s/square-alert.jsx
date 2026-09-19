import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk6ttvbnd.css';
import '../../css/q/qx6xq3b3x.css';
import '../../css/p/pp6vxiujp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rk6ttvbnd"/><path class="qx6xq3b3x"/><circle class="pp6vxiujp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:square-alert"} {...others} />);
}

export default Component;
