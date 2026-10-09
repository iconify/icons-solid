import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tptd5ygch.css';
import '../../css/i/iklw8pg9o.css';
import '../../css/r/r2a1kcczy.css';
import '../../css/b/b0a2wmopo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tptd5ygch"/><path class="iklw8pg9o"/><path class="r2a1kcczy"/><path class="b0a2wmopo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:atom-48-bold"} {...others} />);
}

export default Component;
