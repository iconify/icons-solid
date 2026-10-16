import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e67yunbni.css';
import '../../css/c/cxw7wofud.css';
import '../../css/r/ry05lut2b.css';
import '../../css/g/gtyghabrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e67yunbni"/><path class="cxw7wofud"/><path class="ry05lut2b"/><path class="gtyghabrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hard-drive-minus"} {...others} />);
}

export default Component;
