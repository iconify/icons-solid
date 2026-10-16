import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4z_7vrmz.css';
import '../../css/t/t_ln7kttq.css';
import '../../css/o/owb9_xn9q.css';
import '../../css/h/hpjl1xeux.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a4z_7vrmz"/><path class="t_ln7kttq"/><path class="owb9_xn9q"/><path class="hpjl1xeux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:airborne-wind-20-bold"} {...others} />);
}

export default Component;
