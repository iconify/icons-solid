import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l4ghmbc-g.css';
import '../../css/w/w1mxsqhwf.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="l4ghmbc-g"/><path class="w1mxsqhwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:sock"} {...others} />);
}

export default Component;
