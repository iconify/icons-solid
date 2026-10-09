import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1w0d8d4j.css';
import '../../css/i/i0y7ncbnv.css';
import '../../css/f/f54j4-b-y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p1w0d8d4j"/><path class="i0y7ncbnv"/><path class="f54j4-b-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:building-check-48"} {...others} />);
}

export default Component;
