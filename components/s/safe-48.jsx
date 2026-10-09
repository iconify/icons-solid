import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwbw3abxb.css';
import '../../css/c/c7rkzybvo.css';
import '../../css/h/hberpve6c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pwbw3abxb"/><path class="c7rkzybvo"/><path class="hberpve6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:safe-48"} {...others} />);
}

export default Component;
