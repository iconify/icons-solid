import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/c/cuabdubep.css';
import '../../css/g/guewfbcxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="cuabdubep"/><path class="guewfbcxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:eye-line"} {...others} />);
}

export default Component;
