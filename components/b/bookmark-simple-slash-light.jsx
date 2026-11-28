import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q33dsdzhi.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="q33dsdzhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:bookmark-simple-slash-light"} {...others} />);
}

export default Component;
