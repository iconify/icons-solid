import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8ah1-_tb.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="q8ah1-_tb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:italic-outline"} {...others} />);
}

export default Component;
