import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mrtq9bbsf.css';
import '../../css/d/dos_yhbgg.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/y/ypfz2chph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="mrtq9bbsf"/><circle class="dos_yhbgg"/><circle class="ez1x61b2a"/><path class="ypfz2chph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bicycling-round-linear"} {...others} />);
}

export default Component;
