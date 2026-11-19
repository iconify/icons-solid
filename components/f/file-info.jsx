import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nh46-cchg.css';
import '../../css/z/z0865achw.css';
import '../../css/l/lif1y5bmi.css';
import '../../css/q/qu-iwybrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nh46-cchg"/><path class="z0865achw"/><path class="lif1y5bmi"/><path class="qu-iwybrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-info"} {...others} />);
}

export default Component;
