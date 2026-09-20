import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wi0t6ac8a.css';
import '../../css/e/eyvtn7bui.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="wi0t6ac8a"/><path class="eyvtn7bui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:caution"} {...others} />);
}

export default Component;
