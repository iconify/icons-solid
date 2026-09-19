import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vexnywh-f.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="vexnywh-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cloud-outline"} {...others} />);
}

export default Component;
