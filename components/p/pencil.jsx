import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r9-_mzbbk.css';
import '../../css/v/v2h1vab2o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="r9-_mzbbk"/><path class="v2h1vab2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pencil"} {...others} />);
}

export default Component;
