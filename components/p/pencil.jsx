import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polygon points="1.75 11.25 1.75 14.25 4.75 14.25 14.25 4.75 11.25 1.75"/><line x1="8.75" x2="11.25" y1="4.75" y2="7.25"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:pencil"} {...others} />);
}

export default Component;
