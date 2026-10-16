import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atn8x1kpb.css';
import '../../css/l/lfo7cvbjq.css';
import '../../css/w/wk-hnobdn.css';

const viewBox = {"width":300,"height":300};
const content = `<g clip-rule="evenodd" class="atn8x1kpb"><path class="lfo7cvbjq"/><path class="wk-hnobdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:focalboard"} {...others} />);
}

export default Component;
