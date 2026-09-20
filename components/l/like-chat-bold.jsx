import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp3ta-1pq.css';
import '../../css/g/gfpj9w7rf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dp3ta-1pq"/><path class="gfpj9w7rf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:like-chat-bold"} {...others} />);
}

export default Component;
