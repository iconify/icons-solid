import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn92pkbuc.css';
import '../../css/m/myl9aibrd.css';
import '../../css/e/etzqvpx1q.css';
import '../../css/n/nt1j3jajj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bn92pkbuc"/><path class="myl9aibrd"/><path class="etzqvpx1q"/><path class="nt1j3jajj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pylon-20-bold"} {...others} />);
}

export default Component;
