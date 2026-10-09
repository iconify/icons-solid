import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4gy22yti.css';
import '../../css/i/ifweg2bug.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e4gy22yti"/><path class="ifweg2bug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ground-loop-48"} {...others} />);
}

export default Component;
