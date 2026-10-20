import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6_diewni.css';
import '../../css/s/s2uksm1sb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c6_diewni"/><path class="s2uksm1sb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pen-sparkle-48-bold"} {...others} />);
}

export default Component;
