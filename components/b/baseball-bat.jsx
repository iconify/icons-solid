import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bibe-vlgo.css';
import '../../css/z/zsdijkb5a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="bibe-vlgo"/><path class="zsdijkb5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:baseball-bat"} {...others} />);
}

export default Component;
