import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0x3vwutg.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="j0x3vwutg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:club-duo"} {...others} />);
}

export default Component;
