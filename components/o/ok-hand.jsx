import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xoy70dlmt.css';
import '../../css/y/ydrpduivi.css';
import '../../css/x/xdzgggx_b.css';
import '../../css/c/cujc1ccia.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xoy70dlmt"/><path class="ydrpduivi"/><path clip-rule="evenodd" class="xdzgggx_b"/><path class="cujc1ccia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ok-hand"} {...others} />);
}

export default Component;
