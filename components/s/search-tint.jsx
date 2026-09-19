import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uuv-2mbxf.css';
import '../../css/i/ioy40e8fj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="uuv-2mbxf"/><path class="ioy40e8fj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:search-tint"} {...others} />);
}

export default Component;
