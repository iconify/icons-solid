import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1sn-9bjn.css';
import '../../css/f/fpex59k2x.css';
import '../../css/y/y0i4r3btp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z1sn-9bjn"/><path class="fpex59k2x"/><path class="y0i4r3btp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lpg-tank-20-bold"} {...others} />);
}

export default Component;
