import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez0sud78k.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ez0sud78k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:programming-browser-hash-window-hash-code-programming-internet-language-browser-web-tag"} {...others} />);
}

export default Component;
