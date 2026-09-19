import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/st6a63l3l.css';
import '../../css/q/q1hikebbi.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="st6a63l3l"/><path class="q1hikebbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:quote"} {...others} />);
}

export default Component;
