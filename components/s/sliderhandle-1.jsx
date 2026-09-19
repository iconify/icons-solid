import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mi8c2hbtb.css';
import '../../css/o/ows1v5bvj.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="mi8c2hbtb"/><path class="ows1v5bvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:sliderhandle-1"} {...others} />);
}

export default Component;
