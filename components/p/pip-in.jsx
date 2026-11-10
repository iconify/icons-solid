import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mc6tqrl-h.css';
import '../../css/p/pdsx7eb7o.css';
import '../../css/g/g3wkg17kd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mc6tqrl-h"/><path class="pdsx7eb7o"/><path class="g3wkg17kd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pip-in"} {...others} />);
}

export default Component;
