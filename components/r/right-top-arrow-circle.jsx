import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/voj5jfbvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="voj5jfbvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:right-top-arrow-circle"} {...others} />);
}

export default Component;
