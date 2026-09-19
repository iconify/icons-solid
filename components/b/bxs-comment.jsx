import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ne4uv0bbf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ne4uv0bbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-comment"} {...others} />);
}

export default Component;
