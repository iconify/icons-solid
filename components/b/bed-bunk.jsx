import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-1rd3zwj.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="y-1rd3zwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bed-bunk"} {...others} />);
}

export default Component;
