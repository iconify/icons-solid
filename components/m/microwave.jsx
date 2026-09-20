import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w638ubcgv.css';
import '../../css/m/mr_c8lwmj.css';
import '../../css/w/wyg6c9l2g.css';
import '../../css/g/g61oici3g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="w638ubcgv"/><path clip-rule="evenodd" class="mr_c8lwmj"/><path class="wyg6c9l2g"/><path class="g61oici3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:microwave"} {...others} />);
}

export default Component;
