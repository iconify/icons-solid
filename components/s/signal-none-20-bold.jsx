import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaknp1bcf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qaknp1bcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:signal-none-20-bold"} {...others} />);
}

export default Component;
