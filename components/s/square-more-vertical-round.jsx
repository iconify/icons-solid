import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4u7q7bzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c4u7q7bzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-more-vertical-round"} {...others} />);
}

export default Component;
