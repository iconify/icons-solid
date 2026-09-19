import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1bbndrsh.css';
import '../../css/s/ss_zm4agc.css';
import '../../css/f/fxze2ybkd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="j1bbndrsh"><path class="ss_zm4agc"/><path class="fxze2ybkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:directions-sign-1-duo"} {...others} />);
}

export default Component;
