import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uvzelcbwf.css';
import '../../css/j/j_2jq0_6z.css';
import '../../css/o/ofcr5zbcd.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="uvzelcbwf"/><path class="j_2jq0_6z"/><path class="ofcr5zbcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:database"} {...others} />);
}

export default Component;
