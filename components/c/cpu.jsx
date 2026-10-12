import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li5dbubvl.css';
import '../../css/o/o5fivpbod.css';
import '../../css/r/rg1pxqrvo.css';
import '../../css/m/m2kke9-ot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="li5dbubvl"/><rect class="o5fivpbod"/><rect class="rg1pxqrvo"/><path class="m2kke9-ot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cpu"} {...others} />);
}

export default Component;
