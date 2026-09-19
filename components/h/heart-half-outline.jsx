import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omrej3mio.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="omrej3mio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heart-half-outline"} {...others} />);
}

export default Component;
