import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-a__rbow.css';
import '../../css/l/lppl2sbhj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l-a__rbow"/><path class="lppl2sbhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:group-objects"} {...others} />);
}

export default Component;
