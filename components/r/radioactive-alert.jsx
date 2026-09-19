import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xsno7eowa.css';
import '../../css/t/t_jihkqyx.css';
import '../../css/a/au0fx3bwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xsno7eowa"/><path class="t_jihkqyx"/><path class="au0fx3bwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:radioactive-alert"} {...others} />);
}

export default Component;
