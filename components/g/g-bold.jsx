import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/garrj2qto.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="garrj2qto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:g-bold"} {...others} />);
}

export default Component;
