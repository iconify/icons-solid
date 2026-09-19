import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v0ubzluje.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polyline points="8.25 14.25 2.75 14.25 2.75 1.75 13.25 1.75 13.25 8.25"/><path class="v0ubzluje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:notes-cross"} {...others} />);
}

export default Component;
