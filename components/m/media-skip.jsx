import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polygon points="2.75 13.25 11.25 8 2.75 2.75"/><line x1="14.25" x2="14.25" y1="3.75" y2="12.25"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:media-skip"} {...others} />);
}

export default Component;
