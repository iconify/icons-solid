import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cx4n05xdu.css';
import '../../css/x/x-wp8y4dt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="cx4n05xdu"/><path class="x-wp8y4dt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:flip"} {...others} />);
}

export default Component;
