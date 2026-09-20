import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ja3ox0nfa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ja3ox0nfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:contacts-book-upload-line"} {...others} />);
}

export default Component;
