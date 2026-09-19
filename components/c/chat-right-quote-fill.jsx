import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgc4r4n1b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vgc4r4n1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:chat-right-quote-fill"} {...others} />);
}

export default Component;
