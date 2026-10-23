import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ow38ecb0p.css';
import '../../css/q/qtmq76bec.css';
import '../../css/w/wcj2rxqpy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ow38ecb0p"/><circle class="qtmq76bec"/><path class="wcj2rxqpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:alarm-pause"} {...others} />);
}

export default Component;
