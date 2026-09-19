import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wchwsk_5a.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="wchwsk_5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grin-bold"} {...others} />);
}

export default Component;
