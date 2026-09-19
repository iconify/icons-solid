import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgpee-b0e.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="tgpee-b0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bed-empty-outline"} {...others} />);
}

export default Component;
