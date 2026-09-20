import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu8aw7boy.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qu8aw7boy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:pie-chart-alt-outline"} {...others} />);
}

export default Component;
