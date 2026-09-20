import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s-cr8mbps.css';
import '../../css/n/nm4o4yd2o.css';
import '../../css/s/s_c67512j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s-cr8mbps"/><path class="nm4o4yd2o"/><path class="s_c67512j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:television-question-mark"} {...others} />);
}

export default Component;
