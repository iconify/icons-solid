import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqa0afbxi.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="oqa0afbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:stack-simple-plus"} {...others} />);
}

export default Component;
