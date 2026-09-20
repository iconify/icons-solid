import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wzpei7bmr.css';
import '../../css/m/mmutxxbyz.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="cuyn6tgcc"><path class="wzpei7bmr"/><path class="mmutxxbyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:humidity"} {...others} />);
}

export default Component;
