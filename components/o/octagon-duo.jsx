import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkk5gjixd.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="jkk5gjixd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:octagon-duo"} {...others} />);
}

export default Component;
