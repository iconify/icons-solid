import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgn7hvb-h.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="mgn7hvb-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:droplet-duo"} {...others} />);
}

export default Component;
