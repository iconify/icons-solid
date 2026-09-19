import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydvc4w9ak.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ydvc4w9ak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:golf-ball"} {...others} />);
}

export default Component;
