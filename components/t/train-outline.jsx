import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n9h46nbry.css';
import '../../css/v/vjwvg5ojq.css';
import '../../css/q/qiqtkwofx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n9h46nbry"/><path class="vjwvg5ojq"/><path class="qiqtkwofx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:train-outline"} {...others} />);
}

export default Component;
