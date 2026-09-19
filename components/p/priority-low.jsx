import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1-w6z7eh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c1-w6z7eh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:priority-low"} {...others} />);
}

export default Component;
