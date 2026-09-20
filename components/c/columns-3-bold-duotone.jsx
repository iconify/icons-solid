import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whz6uu_tj.css';
import '../../css/h/h8zib0b8j.css';
import '../../css/v/vik802c-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="whz6uu_tj"/><path class="h8zib0b8j"/><path class="vik802c-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-3-bold-duotone"} {...others} />);
}

export default Component;
