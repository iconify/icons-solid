import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dbd7yjbpd.css';
import '../../css/z/zb3hvbrce.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="dbd7yjbpd"/><path class="zb3hvbrce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:ring"} {...others} />);
}

export default Component;
