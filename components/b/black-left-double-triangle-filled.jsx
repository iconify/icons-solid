import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0yhf0b6q.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="o0yhf0b6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:black-left-double-triangle-filled"} {...others} />);
}

export default Component;
