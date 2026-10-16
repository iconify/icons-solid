import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6jy34m0o.css';
import '../../css/y/yop_hibwm.css';
import '../../css/h/hhhkbob2q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y6jy34m0o"/><path class="yop_hibwm"/><path class="hhhkbob2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-optimiser-20-bold"} {...others} />);
}

export default Component;
