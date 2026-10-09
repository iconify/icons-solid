import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ritmkr3yi.css';
import '../../css/k/kmw8fq5zg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ritmkr3yi"/><path class="kmw8fq5zg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bed-linen-20-bold"} {...others} />);
}

export default Component;
