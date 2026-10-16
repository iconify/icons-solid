import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev30ibc3d.css';
import '../../css/d/dlfk2kx2y.css';
import '../../css/f/feh6r_b4k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ev30ibc3d"/><path class="dlfk2kx2y"/><path class="feh6r_b4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:elevator-20-bold"} {...others} />);
}

export default Component;
