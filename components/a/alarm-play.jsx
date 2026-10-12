import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rh1gs8bqi.css';
import '../../css/q/qtmq76bec.css';
import '../../css/m/miq1pw1fw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rh1gs8bqi"/><circle class="qtmq76bec"/><path class="miq1pw1fw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:alarm-play"} {...others} />);
}

export default Component;
