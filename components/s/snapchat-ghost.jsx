import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onnfaq1uh.css';

const viewBox = {"width":1664,"height":1536};
const content = `<path class="onnfaq1uh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:snapchat-ghost"} {...others} />);
}

export default Component;
