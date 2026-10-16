import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s900nabfq.css';
import '../../css/w/w5mx-v3dw.css';
import '../../css/m/ma8aecusd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s900nabfq"/><path class="w5mx-v3dw"/><path class="ma8aecusd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trowel-20-bold"} {...others} />);
}

export default Component;
