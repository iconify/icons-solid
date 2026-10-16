import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thnh47bcs.css';
import '../../css/f/fuhaovbal.css';
import '../../css/t/t1nxsq_lx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="thnh47bcs"/><path class="fuhaovbal"/><path class="t1nxsq_lx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-bulb-20-bold"} {...others} />);
}

export default Component;
