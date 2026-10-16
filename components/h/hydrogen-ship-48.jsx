import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r30vy4y7i.css';
import '../../css/f/frzyvi6ro.css';
import '../../css/f/fj1_tccay.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r30vy4y7i"/><path class="frzyvi6ro"/><path class="fj1_tccay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-ship-48"} {...others} />);
}

export default Component;
