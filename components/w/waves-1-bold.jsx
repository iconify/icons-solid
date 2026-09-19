import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg29-bb8x.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="vg29-bb8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:waves-1-bold"} {...others} />);
}

export default Component;
