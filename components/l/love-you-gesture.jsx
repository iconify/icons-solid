import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2oxn1iue.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w2oxn1iue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:love-you-gesture"} {...others} />);
}

export default Component;
