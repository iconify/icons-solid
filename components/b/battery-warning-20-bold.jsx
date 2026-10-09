import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q07t0ebtb.css';
import '../../css/s/sjt-1kaax.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q07t0ebtb"/><path class="sjt-1kaax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-warning-20-bold"} {...others} />);
}

export default Component;
