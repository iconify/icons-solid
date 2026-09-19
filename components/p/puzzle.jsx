import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mj_tqmb9g.css';
import '../../css/l/loyg9l91u.css';
import '../../css/q/q85lzdbct.css';
import '../../css/d/dpj4gbi2o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="mj_tqmb9g"/><path class="loyg9l91u"/><path class="q85lzdbct"/><path class="dpj4gbi2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:puzzle"} {...others} />);
}

export default Component;
