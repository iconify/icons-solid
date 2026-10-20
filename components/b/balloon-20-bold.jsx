import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx1ri5b_k.css';
import '../../css/v/v9p5ihx-c.css';
import '../../css/g/gd_6nq8xf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yx1ri5b_k"/><path class="v9p5ihx-c"/><path class="gd_6nq8xf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:balloon-20-bold"} {...others} />);
}

export default Component;
