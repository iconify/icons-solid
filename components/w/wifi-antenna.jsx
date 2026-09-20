import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zhofcq2qx.css';
import '../../css/g/gu_fr1c4b.css';
import '../../css/y/y1gh3htae.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zhofcq2qx"/><path class="gu_fr1c4b"/><path class="y1gh3htae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:wifi-antenna"} {...others} />);
}

export default Component;
