import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzbcp5bsh.css';
import '../../css/l/lu7edcbnm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rzbcp5bsh"/><path class="lu7edcbnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:text-color-48-bold"} {...others} />);
}

export default Component;
