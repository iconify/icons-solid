import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qwzcgabfh.css';
import '../../css/a/atcwzkbau.css';
import '../../css/i/ij-ylgbkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qwzcgabfh"/><path class="atcwzkbau"/><path class="ij-ylgbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:devices-line-duotone"} {...others} />);
}

export default Component;
