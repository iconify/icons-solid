import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2_yd-19i.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="y2_yd-19i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cog-1-duo"} {...others} />);
}

export default Component;
