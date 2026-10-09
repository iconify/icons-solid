import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u69qewb7n.css';
import '../../css/z/zlmknobhq.css';
import '../../css/r/ri1oeyk-d.css';
import '../../css/e/e9_5_4bqz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u69qewb7n"/><path class="zlmknobhq"/><path class="ri1oeyk-d"/><path class="e9_5_4bqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:usb-20-bold"} {...others} />);
}

export default Component;
