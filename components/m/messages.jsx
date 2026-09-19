import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hbm7lybdm.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polygon points="14.25 14.25 14.25 5.25 4.75 5.25 4.75 11.25 10.75 11.25"/><path class="hbm7lybdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:messages"} {...others} />);
}

export default Component;
