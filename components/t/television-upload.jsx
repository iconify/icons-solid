import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s-cr8mbps.css';
import '../../css/q/qicdu-bik.css';
import '../../css/q/q2xia5bww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s-cr8mbps"/><path class="qicdu-bik"/><path class="q2xia5bww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:television-upload"} {...others} />);
}

export default Component;
