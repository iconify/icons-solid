import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o20mlz1qj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o20mlz1qj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:grip-horizontal"} {...others} />);
}

export default Component;
