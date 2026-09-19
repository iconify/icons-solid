import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/l/lf7kmzncr.css';
import '../../css/v/v64t8k3yo.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><rect class="lf7kmzncr"/><path class="v64t8k3yo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:mobile"} {...others} />);
}

export default Component;
