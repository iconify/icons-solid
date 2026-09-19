import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcta_v5_z.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="dcta_v5_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:q-outline"} {...others} />);
}

export default Component;
