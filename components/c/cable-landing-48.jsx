import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eilv5mbmy.css';
import '../../css/f/f_b1kumim.css';
import '../../css/r/r1ohr3b0e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eilv5mbmy"/><path class="f_b1kumim"/><path class="r1ohr3b0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-landing-48"} {...others} />);
}

export default Component;
