import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl5gjeb5c.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="tl5gjeb5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:location-arrow"} {...others} />);
}

export default Component;
