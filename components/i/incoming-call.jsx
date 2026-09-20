import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzw0mk9ja.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rzw0mk9ja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:incoming-call"} {...others} />);
}

export default Component;
