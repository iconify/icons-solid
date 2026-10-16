import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdvp-0bcn.css';
import '../../css/h/hbbh9n7le.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kdvp-0bcn"/><path class="hbbh9n7le"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-butt-48"} {...others} />);
}

export default Component;
