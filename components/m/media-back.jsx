import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polygon points="13.25 13.25 4.75 8 13.25 2.75"/><line x1="1.75" x2="1.75" y1="3.75" y2="12.25"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:media-back"} {...others} />);
}

export default Component;
