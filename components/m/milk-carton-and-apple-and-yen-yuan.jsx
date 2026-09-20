import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdt9a3kty.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qdt9a3kty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:milk-carton-and-apple-and-yen-yuan"} {...others} />);
}

export default Component;
