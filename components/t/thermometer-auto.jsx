import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/scc5vftpi.css';
import '../../css/k/k8_dgshaq.css';
import '../../css/o/owbap849d.css';
import '../../css/t/tt-x2kdvz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="scc5vftpi"/><path class="k8_dgshaq"/><path class="owbap849d"/><path class="tt-x2kdvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:thermometer-auto"} {...others} />);
}

export default Component;
