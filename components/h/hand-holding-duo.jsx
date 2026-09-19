import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyq7mlb0v.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="iyq7mlb0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hand-holding-duo"} {...others} />);
}

export default Component;
