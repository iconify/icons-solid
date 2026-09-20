import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q41tdvb1m.css';
import '../../css/w/wvg0x2bzq.css';
import '../../css/m/myzvowxri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q41tdvb1m"/><path class="wvg0x2bzq"/><path class="myzvowxri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:collage"} {...others} />);
}

export default Component;
