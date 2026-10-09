import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrit7jbhb.css';
import '../../css/r/r92287bes.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jrit7jbhb"/><path class="r92287bes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eraser-20"} {...others} />);
}

export default Component;
