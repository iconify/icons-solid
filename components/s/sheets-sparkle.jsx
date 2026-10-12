import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dq2dfdcri.css';
import '../../css/o/onkmrb1ky.css';
import '../../css/g/g9qxn4b9s.css';
import '../../css/x/xc68_llyg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dq2dfdcri"/><path class="onkmrb1ky"/><path class="g9qxn4b9s"/><path class="xc68_llyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sheets-sparkle"} {...others} />);
}

export default Component;
