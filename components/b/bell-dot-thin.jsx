import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqcvlx9sg.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="jqcvlx9sg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:bell-dot-thin"} {...others} />);
}

export default Component;
