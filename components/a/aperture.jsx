import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j9v1vejoh.css';
import '../../css/z/z44w2acsf.css';
import '../../css/y/ysfgnrezj.css';
import '../../css/i/i1t5euwqz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="j9v1vejoh"/><path class="z44w2acsf"/><path class="ysfgnrezj"/><path class="i1t5euwqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:aperture"} {...others} />);
}

export default Component;
