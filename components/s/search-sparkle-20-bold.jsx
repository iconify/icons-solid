import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnqzr1ypb.css';
import '../../css/j/jo6iw5bur.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pnqzr1ypb"/><path class="jo6iw5bur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:search-sparkle-20-bold"} {...others} />);
}

export default Component;
