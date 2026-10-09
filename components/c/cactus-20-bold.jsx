import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1of7cc9l.css';
import '../../css/b/bw6ycksak.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w1of7cc9l"/><path class="bw6ycksak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cactus-20-bold"} {...others} />);
}

export default Component;
