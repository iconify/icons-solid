import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v6d912b-j.css';
import '../../css/a/a2hdhl6ak.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="v6d912b-j"/><path class="a2hdhl6ak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bandage"} {...others} />);
}

export default Component;
