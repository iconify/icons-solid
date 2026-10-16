import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whusgz6dz.css';
import '../../css/t/tx1qmhbzi.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="whusgz6dz"/><path class="tx1qmhbzi"/><path class="pycxazbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-sphere-20"} {...others} />);
}

export default Component;
