import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pvep1hbek.css';
import '../../css/h/hh_iruycs.css';
import '../../css/o/ok10udbbc.css';
import '../../css/v/vhlnnlb3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pvep1hbek"/><path class="hh_iruycs"/><path class="ok10udbbc"/><path class="vhlnnlb3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-2-linear"} {...others} />);
}

export default Component;
