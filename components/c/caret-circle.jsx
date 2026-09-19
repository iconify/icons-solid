import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vm5i1xbah.css';
import '../../css/c/cvq242bzi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="vm5i1xbah"/><path class="cvq242bzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:caret-circle"} {...others} />);
}

export default Component;
