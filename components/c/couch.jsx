import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yg78gqb1k.css';
import '../../css/h/h9lpzdhad.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="yg78gqb1k"/><path class="h9lpzdhad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:couch"} {...others} />);
}

export default Component;
