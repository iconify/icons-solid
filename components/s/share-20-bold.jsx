import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9rholkuw.css';
import '../../css/z/zr6v3gbry.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p9rholkuw"/><path class="zr6v3gbry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:share-20-bold"} {...others} />);
}

export default Component;
