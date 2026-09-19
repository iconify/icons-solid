import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otc8jfbmx.css';

const viewBox = {"width":32,"height":32};
const content = `<path clip-rule="evenodd" class="otc8jfbmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:dog-face"} {...others} />);
}

export default Component;
