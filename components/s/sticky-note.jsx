import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polygon points="9.25 13.25 2.75 13.25 2.75 2.75 13.25 2.75 13.25 9.25"/><polyline points="8.75 13.25 8.75 8.75 13.25 8.75"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:sticky-note"} {...others} />);
}

export default Component;
