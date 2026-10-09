import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy4vy0gsk.css';
import '../../css/u/uy2o04bub.css';
import '../../css/m/mbusswbar.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sy4vy0gsk"/><path class="uy2o04bub"/><path class="mbusswbar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:piston-48"} {...others} />);
}

export default Component;
