import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzpp4026n.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="pzpp4026n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:square-outline"} {...others} />);
}

export default Component;
