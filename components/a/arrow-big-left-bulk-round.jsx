import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wosu6bw4y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wosu6bw4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-big-left-bulk-round"} {...others} />);
}

export default Component;
