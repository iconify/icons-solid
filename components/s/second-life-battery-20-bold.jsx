import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nq-2zqbgl.css';
import '../../css/x/xny_r4baq.css';
import '../../css/m/muekd2yie.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nq-2zqbgl"/><path class="xny_r4baq"/><path class="muekd2yie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:second-life-battery-20-bold"} {...others} />);
}

export default Component;
