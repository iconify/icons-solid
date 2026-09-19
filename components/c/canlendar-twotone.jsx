import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cklww9brb.css';
import '../../css/i/i0mrvmytj.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="cklww9brb"/><path class="i0mrvmytj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:canlendar-twotone"} {...others} />);
}

export default Component;
