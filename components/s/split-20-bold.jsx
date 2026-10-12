import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0t8-abhi.css';
import '../../css/j/j30lsq6za.css';
import '../../css/g/gh5mgezjj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e0t8-abhi"/><path class="j30lsq6za"/><path class="gh5mgezjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:split-20-bold"} {...others} />);
}

export default Component;
