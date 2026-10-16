import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awouj5jzj.css';
import '../../css/z/z886q2x5d.css';
import '../../css/m/me6j3hnnd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="awouj5jzj"/><path class="z886q2x5d"/><path class="me6j3hnnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:steam-reformer-48-bold"} {...others} />);
}

export default Component;
