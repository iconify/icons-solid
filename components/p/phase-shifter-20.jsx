import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/riu484b2u.css';
import '../../css/j/jbawidbgl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="riu484b2u"/><path class="jbawidbgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phase-shifter-20"} {...others} />);
}

export default Component;
