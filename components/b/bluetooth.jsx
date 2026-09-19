import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkwz5233h.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="xkwz5233h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:bluetooth"} {...others} />);
}

export default Component;
