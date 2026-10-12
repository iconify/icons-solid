import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhh5q_bxg.css';
import '../../css/t/tetsfk0bz.css';
import '../../css/m/mk-w6obqp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uhh5q_bxg"/><path class="tetsfk0bz"/><path class="mk-w6obqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cnc-machine-48"} {...others} />);
}

export default Component;
