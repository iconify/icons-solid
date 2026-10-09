import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5_sz-bgs.css';
import '../../css/b/b86mn5bez.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p5_sz-bgs"/><path class="b86mn5bez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bridge-20-bold"} {...others} />);
}

export default Component;
