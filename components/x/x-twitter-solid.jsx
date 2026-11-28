import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/javx1rslg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="javx1rslg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:x-twitter-solid"} {...others} />);
}

export default Component;
