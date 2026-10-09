import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/buk4h-b4t.css';
import '../../css/o/om5drtboh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="buk4h-b4t"/><path class="om5drtboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camera-off-20-bold"} {...others} />);
}

export default Component;
