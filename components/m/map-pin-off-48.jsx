import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xneu8q3zz.css';
import '../../css/n/n5wvztb1b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xneu8q3zz"/><path class="n5wvztb1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-pin-off-48"} {...others} />);
}

export default Component;
