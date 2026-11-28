import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ap1_i8bof.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="ap1_i8bof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:shield-user-thin"} {...others} />);
}

export default Component;
