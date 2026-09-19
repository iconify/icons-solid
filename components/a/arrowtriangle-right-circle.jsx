import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi8mhqxrl.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="hi8mhqxrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:arrowtriangle-right-circle"} {...others} />);
}

export default Component;
