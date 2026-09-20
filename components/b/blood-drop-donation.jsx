import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/js0b88duz.css';
import '../../css/t/ttq-c_wut.css';
import '../../css/z/zts9p0bez.css';
import '../../css/v/vhvxwvg7f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="js0b88duz"/><path class="ttq-c_wut"/><path class="zts9p0bez"/><path class="vhvxwvg7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:blood-drop-donation"} {...others} />);
}

export default Component;
