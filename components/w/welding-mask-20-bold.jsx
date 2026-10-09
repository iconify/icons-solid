import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3t3vqbie.css';
import '../../css/u/uook0dnzb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a3t3vqbie"/><path class="uook0dnzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:welding-mask-20-bold"} {...others} />);
}

export default Component;
