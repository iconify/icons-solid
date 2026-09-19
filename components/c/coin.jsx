import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cvcvhiugj.css';
import '../../css/o/otj-prbjf.css';
import '../../css/k/k2hr7pzpw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="cvcvhiugj"/><path class="otj-prbjf"/><path class="k2hr7pzpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:coin"} {...others} />);
}

export default Component;
