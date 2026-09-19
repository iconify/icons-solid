import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mddf--b2d.css';
import '../../css/k/k3s0atbkj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="mddf--b2d"/><path class="k3s0atbkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:quasar-wordmark"} {...others} />);
}

export default Component;
