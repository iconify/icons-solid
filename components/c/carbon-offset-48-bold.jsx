import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6eu_k3xl.css';
import '../../css/f/f9l75pbbf.css';
import '../../css/q/q736ljmrr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g6eu_k3xl"/><path class="f9l75pbbf"/><path class="q736ljmrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-offset-48-bold"} {...others} />);
}

export default Component;
