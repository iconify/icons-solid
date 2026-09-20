import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2g7scb2e.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="c2g7scb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:toilet-man-solid"} {...others} />);
}

export default Component;
