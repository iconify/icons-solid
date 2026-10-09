import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0lzq_bbj.css';
import '../../css/s/s_30dcbkg.css';
import '../../css/u/ujgabjbbe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n0lzq_bbj"/><path class="s_30dcbkg"/><path class="ujgabjbbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gamepad-20-bold"} {...others} />);
}

export default Component;
