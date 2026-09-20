import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/trr-_mkon.css';
import '../../css/d/dos_yhbgg.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/j/j5s7abbmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="trr-_mkon"/><circle class="dos_yhbgg"/><circle class="ez1x61b2a"/><path class="j5s7abbmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bicycling-broken"} {...others} />);
}

export default Component;
