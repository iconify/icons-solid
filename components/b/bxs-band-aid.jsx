import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y95ohhh1q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y95ohhh1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-band-aid"} {...others} />);
}

export default Component;
