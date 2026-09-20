import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j87ilt-jn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j87ilt-jn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:surprised-face-with-x-eyes"} {...others} />);
}

export default Component;
