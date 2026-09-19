import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polygon points="4.75 2.25 4.75 10.25 14.25 10.25 14.25 3.75 9.25 3.75 7.75 2.25"/><polyline points="4.75 5.25 1.75 5.25 1.75 13.25 11.25 13.25 11.25 10.25"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:folders"} {...others} />);
}

export default Component;
