import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5f1l6b2a.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="i5f1l6b2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hand-fist-duo"} {...others} />);
}

export default Component;
