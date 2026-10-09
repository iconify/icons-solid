import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tub7k1bln.css';
import '../../css/q/q3_36q7xg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tub7k1bln"/><path class="q3_36q7xg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:glasses-20"} {...others} />);
}

export default Component;
