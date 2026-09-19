import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pfo7l95fh.css';
import '../../css/z/zp8t9bcqa.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><rect class="pfo7l95fh"/><path class="zp8t9bcqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:monitor-stroke-16"} {...others} />);
}

export default Component;
