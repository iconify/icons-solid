import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jijaykbcd.css';
import '../../css/u/uylaeij1i.css';
import '../../css/y/y1e_v1sal.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jijaykbcd"/><path class="uylaeij1i"/><path class="y1e_v1sal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:text-cursor-20-bold"} {...others} />);
}

export default Component;
