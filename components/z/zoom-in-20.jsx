import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsx9bkbtz.css';
import '../../css/g/gq2n7-bry.css';
import '../../css/m/munnn-b_e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jsx9bkbtz"/><path class="gq2n7-bry"/><path class="munnn-b_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:zoom-in-20"} {...others} />);
}

export default Component;
