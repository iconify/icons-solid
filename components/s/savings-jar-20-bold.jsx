import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtdrk6b1n.css';
import '../../css/m/moe3g5b7s.css';
import '../../css/h/hvh37gb8j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mtdrk6b1n"/><path class="moe3g5b7s"/><path class="hvh37gb8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:savings-jar-20-bold"} {...others} />);
}

export default Component;
