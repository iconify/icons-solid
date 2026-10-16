import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukbyayb8m.css';
import '../../css/f/fp6c9u3kg.css';
import '../../css/g/ggxhooboy.css';
import '../../css/k/k6mrqp2bu.css';
import '../../css/t/te1q7v41z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ukbyayb8m"/><path class="fp6c9u3kg"/><path class="ggxhooboy"/><path class="k6mrqp2bu"/><path class="te1q7v41z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pv-string-20"} {...others} />);
}

export default Component;
