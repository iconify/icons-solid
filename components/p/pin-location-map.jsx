import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k2pu5bcyu.css';
import '../../css/m/mxcb4db5o.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="k2pu5bcyu"/><path class="mxcb4db5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:pin-location-map"} {...others} />);
}

export default Component;
