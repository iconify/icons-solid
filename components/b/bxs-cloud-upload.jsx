import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh49xw4sk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rh49xw4sk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-cloud-upload"} {...others} />);
}

export default Component;
