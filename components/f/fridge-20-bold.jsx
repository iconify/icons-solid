import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkj4mhl3n.css';
import '../../css/p/p8l4h7b3m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kkj4mhl3n"/><path class="p8l4h7b3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fridge-20-bold"} {...others} />);
}

export default Component;
