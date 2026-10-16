import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2spr2bve.css';
import '../../css/x/xlfcvcr0c.css';
import '../../css/q/q7ailzblg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f2spr2bve"/><path class="xlfcvcr0c"/><path class="q7ailzblg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ceiling-light-48"} {...others} />);
}

export default Component;
