import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xjjhhf_0z.css';
import '../../css/b/bj5u4w47y.css';
import '../../css/t/tbbe0ybdv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xjjhhf_0z"/><path class="bj5u4w47y"/><path class="tbbe0ybdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:tune-adjust-volume"} {...others} />);
}

export default Component;
