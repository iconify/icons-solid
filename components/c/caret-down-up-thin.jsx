import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q16dfk8ej.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="q16dfk8ej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:caret-down-up-thin"} {...others} />);
}

export default Component;
