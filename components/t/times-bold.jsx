import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__s2g6zp.css';
import '../../css/w/wbf1jl94t.css';
import '../../css/g/gz1qx8bxy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="a__s2g6zp"><path class="wbf1jl94t"/><path class="gz1qx8bxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:times-bold"} {...others} />);
}

export default Component;
