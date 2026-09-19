import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl3hfwebj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xl3hfwebj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:chat-left-heart-fill"} {...others} />);
}

export default Component;
