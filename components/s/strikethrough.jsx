import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5_-s9p0i.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="e5_-s9p0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:strikethrough"} {...others} />);
}

export default Component;
