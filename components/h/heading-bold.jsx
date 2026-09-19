import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7xn8x6wm.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="a7xn8x6wm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heading-bold"} {...others} />);
}

export default Component;
