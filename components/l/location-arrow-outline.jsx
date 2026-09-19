import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnqen6m1e.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="tnqen6m1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:location-arrow-outline"} {...others} />);
}

export default Component;
