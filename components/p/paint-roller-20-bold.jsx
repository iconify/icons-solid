import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it8r15bsj.css';
import '../../css/r/rk4fbbbyc.css';
import '../../css/p/pneyzwbuq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="it8r15bsj"/><path class="rk4fbbbyc"/><path class="pneyzwbuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paint-roller-20-bold"} {...others} />);
}

export default Component;
