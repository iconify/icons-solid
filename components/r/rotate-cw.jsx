import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oll7jobqn.css';

const viewBox = {"width":456,"height":464};
const content = `<path class="oll7jobqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:rotate-cw"} {...others} />);
}

export default Component;
