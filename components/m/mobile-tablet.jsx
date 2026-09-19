import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z2gq6keiz.css';
import '../../css/m/m4thh9_4l.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="z2gq6keiz"/><path class="m4thh9_4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mobile-tablet"} {...others} />);
}

export default Component;
