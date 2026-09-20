import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r8ksu0s_d.css';
import '../../css/x/xx-_idbnk.css';
import '../../css/q/qokg58j2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r8ksu0s_d"/><path class="xx-_idbnk"/><path class="qokg58j2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:download"} {...others} />);
}

export default Component;
