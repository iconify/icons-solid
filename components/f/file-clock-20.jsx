import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hp9jrqb6k.css';
import '../../css/e/efx3s8brg.css';
import '../../css/k/kf8qud5kt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hp9jrqb6k"/><path class="efx3s8brg"/><path class="kf8qud5kt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-clock-20"} {...others} />);
}

export default Component;
