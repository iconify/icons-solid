import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v40dffb0a.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="v40dffb0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tree-5-outline"} {...others} />);
}

export default Component;
