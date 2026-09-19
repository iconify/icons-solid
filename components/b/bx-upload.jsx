import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or20avb8e.css';
import '../../css/u/uotgxeb7k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="or20avb8e"/><path class="uotgxeb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-upload"} {...others} />);
}

export default Component;
