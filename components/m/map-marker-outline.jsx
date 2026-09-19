import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6ya0ub4m.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="l6ya0ub4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:map-marker-outline"} {...others} />);
}

export default Component;
