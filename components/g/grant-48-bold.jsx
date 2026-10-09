import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4vli7ncu.css';
import '../../css/i/i66lmo-ym.css';
import '../../css/z/z_g0_6bob.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j4vli7ncu"/><path class="i66lmo-ym"/><path class="z_g0_6bob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grant-48-bold"} {...others} />);
}

export default Component;
