import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6u7_8bet.css';
import '../../css/c/con_q4m6a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i6u7_8bet"/><path class="con_q4m6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-speed-48-bold"} {...others} />);
}

export default Component;
