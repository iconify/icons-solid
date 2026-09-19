import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polygon points="2.75 1.75 8.25 1.75 13.25 6.75 13.25 14.25 2.75 14.25"/><polyline points="7.75 2.25 7.75 7.25 12.75 7.25"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:file"} {...others} />);
}

export default Component;
