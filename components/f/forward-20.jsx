import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rg4uk4b1t.css';
import '../../css/j/j5r62vbmy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rg4uk4b1t"/><path class="j5r62vbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:forward-20"} {...others} />);
}

export default Component;
