import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jotj3v2bz.css';
import '../../css/y/y_-ddrbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jotj3v2bz"/><path class="y_-ddrbdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-mailchimp"} {...others} />);
}

export default Component;
