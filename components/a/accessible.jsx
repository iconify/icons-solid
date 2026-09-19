import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y7ngan3je.css';
import '../../css/z/zw1hth_za.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="y7ngan3je"/><path class="zw1hth_za"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:accessible"} {...others} />);
}

export default Component;
