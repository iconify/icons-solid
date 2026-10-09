import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jogeij0zr.css';
import '../../css/k/kwe73qles.css';
import '../../css/a/amxn85gtp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jogeij0zr"/><path class="kwe73qles"/><path class="amxn85gtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-check-20-bold"} {...others} />);
}

export default Component;
