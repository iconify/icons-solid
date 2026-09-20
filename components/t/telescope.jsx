import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpgcs8sha.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="vpgcs8sha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:telescope"} {...others} />);
}

export default Component;
