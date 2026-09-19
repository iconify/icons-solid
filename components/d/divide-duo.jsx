import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4bp8ebol.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="b4bp8ebol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:divide-duo"} {...others} />);
}

export default Component;
