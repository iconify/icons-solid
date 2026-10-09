import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfx3nk7mg.css';
import '../../css/h/hno73w3lb.css';
import '../../css/f/f0-wxfhvi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wfx3nk7mg"/><path class="hno73w3lb"/><path class="f0-wxfhvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:canal-lock-48"} {...others} />);
}

export default Component;
