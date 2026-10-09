import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5sdatbxs.css';
import '../../css/e/e0qbytbil.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k5sdatbxs"/><path class="e0qbytbil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ice-cream-48"} {...others} />);
}

export default Component;
