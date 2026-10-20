import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a969tno5c.css';
import '../../css/j/j4abbg0tt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a969tno5c"/><path class="j4abbg0tt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:binoculars-20-bold"} {...others} />);
}

export default Component;
