import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2-d9v4-q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l2-d9v4-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-sparkle-round"} {...others} />);
}

export default Component;
