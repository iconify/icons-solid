import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qxz87rb8d.css';
import '../../css/l/lv8s3qbpf.css';
import '../../css/v/vfkdrvbaz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="qxz87rb8d"/><path class="lv8s3qbpf"/><path class="vfkdrvbaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:crop-selection"} {...others} />);
}

export default Component;
