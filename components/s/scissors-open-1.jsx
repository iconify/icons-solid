import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6d7x4bpp.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="m6d7x4bpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:scissors-open-1"} {...others} />);
}

export default Component;
