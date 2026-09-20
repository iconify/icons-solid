import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p106ycbtt.css';
import '../../css/v/vq20y5lfc.css';
import '../../css/p/pf55n9k4q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="p106ycbtt"/><path clip-rule="evenodd" class="vq20y5lfc"/><path class="pf55n9k4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:user-multiple-group"} {...others} />);
}

export default Component;
