import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ozmxmubwb.css';
import '../../css/y/y3eow_bqa.css';
import '../../css/v/vv62orbee.css';
import '../../css/z/z-8mnucyr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ozmxmubwb"/><path class="y3eow_bqa"/><path class="vv62orbee"/><path class="z-8mnucyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:kurta"} {...others} />);
}

export default Component;
