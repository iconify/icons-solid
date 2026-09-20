import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mi79qknjq.css';
import '../../css/t/t22r7x1ib.css';
import '../../css/b/bpia10usa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mi79qknjq"/><rect class="t22r7x1ib"/><rect class="bpia10usa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:suitcase"} {...others} />);
}

export default Component;
