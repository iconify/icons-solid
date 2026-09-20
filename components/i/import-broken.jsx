import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o7vxnob1s.css';
import '../../css/w/wi643n5is.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="o7vxnob1s"/><path class="wi643n5is"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:import-broken"} {...others} />);
}

export default Component;
