import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fipf0oqlo.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="fipf0oqlo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:map-marker-2-bold"} {...others} />);
}

export default Component;
