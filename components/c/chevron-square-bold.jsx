import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9ys0rl9z.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="m9ys0rl9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chevron-square-bold"} {...others} />);
}

export default Component;
