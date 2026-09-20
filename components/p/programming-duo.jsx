import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/m/m16-b9bsy.css';
import '../../css/o/oalkwfcig.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="m16-b9bsy"/><path class="oalkwfcig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:programming-duo"} {...others} />);
}

export default Component;
