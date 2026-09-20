import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxe7qoajj.css';
import '../../css/y/yqu3ehqmd.css';
import '../../css/i/i0axfsbgs.css';
import '../../css/t/tjcqu8l6p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yxe7qoajj"/><path clip-rule="evenodd" class="yqu3ehqmd"/><path class="i0axfsbgs"/><path class="tjcqu8l6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:camera-1"} {...others} />);
}

export default Component;
