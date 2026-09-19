import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wkrusxbum.css';
import '../../css/h/hx7n4sx5y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="wkrusxbum"/><path class="hx7n4sx5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:search-1-tint"} {...others} />);
}

export default Component;
