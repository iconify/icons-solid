import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c7nnx_bxk.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polyline points="7.25 14.25 2.75 14.25 2.75 1.75 13.25 1.75 13.25 9.25"/><path class="c7nnx_bxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:notes-tick"} {...others} />);
}

export default Component;
