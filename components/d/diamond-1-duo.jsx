import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsyyj6buq.css';

const viewBox = {"width":80,"height":80};
const content = `<rect transform="rotate(45 40 12)" class="dsyyj6buq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:diamond-1-duo"} {...others} />);
}

export default Component;
