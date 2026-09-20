import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wcaxpabce.css';
import '../../css/u/uowcfd4jh.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="wcaxpabce"/><path class="uowcfd4jh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:alarm-solid"} {...others} />);
}

export default Component;
