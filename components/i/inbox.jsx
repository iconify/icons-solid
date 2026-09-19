import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jgaqzcb5d.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polygon points="1.75 13.25 14.25 13.25 14.25 8.25 11.75 2.75 4.25 2.75 1.75 8.25"/><path class="jgaqzcb5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:inbox"} {...others} />);
}

export default Component;
