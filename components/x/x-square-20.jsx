import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxp0_ibgn.css';
import '../../css/a/a3b5c4b5n.css';
import '../../css/f/fxwv4z8sc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qxp0_ibgn"/><path class="a3b5c4b5n"/><path class="fxwv4z8sc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:x-square-20"} {...others} />);
}

export default Component;
