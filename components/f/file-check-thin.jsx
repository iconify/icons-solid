import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/on15oyn-w.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="on15oyn-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:file-check-thin"} {...others} />);
}

export default Component;
