import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j85y1pb5n.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j85y1pb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:stardust-above-outstretched-hand"} {...others} />);
}

export default Component;
