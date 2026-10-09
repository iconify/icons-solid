import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0i931beb.css';
import '../../css/i/ii-al_j4y.css';
import '../../css/i/i7dx0sbjz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w0i931beb"/><path class="ii-al_j4y"/><path class="i7dx0sbjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-farm-48-bold"} {...others} />);
}

export default Component;
