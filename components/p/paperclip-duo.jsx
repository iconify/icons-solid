import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvjmkkxzc.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="wvjmkkxzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:paperclip-duo"} {...others} />);
}

export default Component;
