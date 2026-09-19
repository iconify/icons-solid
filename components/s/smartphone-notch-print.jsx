import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wtps0__ug.css';
import '../../css/r/rkwrt1bji.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="wtps0__ug"/><path clip-rule="evenodd" class="rkwrt1bji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:smartphone-notch-print"} {...others} />);
}

export default Component;
