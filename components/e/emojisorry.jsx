import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7c84o2ps.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="n7c84o2ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:emojisorry"} {...others} />);
}

export default Component;
