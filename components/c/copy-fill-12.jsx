import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fj5kwvbra.css';
import '../../css/y/yaf0t5bmv.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><path class="fj5kwvbra"/><rect class="yaf0t5bmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:copy-fill-12"} {...others} />);
}

export default Component;
