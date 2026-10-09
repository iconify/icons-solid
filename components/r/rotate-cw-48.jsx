import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crskxccsk.css';
import '../../css/t/t_o6wlbhn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="crskxccsk"/><path class="t_o6wlbhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rotate-cw-48"} {...others} />);
}

export default Component;
