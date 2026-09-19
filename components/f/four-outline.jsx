import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl_3njf8q.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="vl_3njf8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:four-outline"} {...others} />);
}

export default Component;
