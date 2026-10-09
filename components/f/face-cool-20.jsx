import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/t/tb4o58eqn.css';
import '../../css/z/z47m5z0qt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="tb4o58eqn"/><path class="z47m5z0qt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:face-cool-20"} {...others} />);
}

export default Component;
