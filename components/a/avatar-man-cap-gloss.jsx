import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j60bv-b-y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j60bv-b-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-cap-gloss"} {...others} />);
}

export default Component;
