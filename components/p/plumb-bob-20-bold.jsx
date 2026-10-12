import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3uhkpz7r.css';
import '../../css/j/j_u0kbnup.css';
import '../../css/v/v-u3t3bvn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f3uhkpz7r"/><path class="j_u0kbnup"/><path class="v-u3t3bvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plumb-bob-20-bold"} {...others} />);
}

export default Component;
