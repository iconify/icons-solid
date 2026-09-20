import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i72gs7b7u.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="i72gs7b7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:discussion-converstion-reply-remix"} {...others} />);
}

export default Component;
