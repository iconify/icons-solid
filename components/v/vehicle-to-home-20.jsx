import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3q0gfbmt.css';
import '../../css/x/x9yxr3ber.css';
import '../../css/z/ztzxys0fx.css';
import '../../css/k/kp6-thbki.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k3q0gfbmt"/><path class="x9yxr3ber"/><path class="ztzxys0fx"/><path class="kp6-thbki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vehicle-to-home-20"} {...others} />);
}

export default Component;
