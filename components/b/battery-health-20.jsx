import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5fpfqrkj.css';
import '../../css/g/gg61wfd5d.css';
import '../../css/s/s87v5e1do.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w5fpfqrkj"/><path class="gg61wfd5d"/><path class="s87v5e1do"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-health-20"} {...others} />);
}

export default Component;
