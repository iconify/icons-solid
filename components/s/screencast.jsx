import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ohw09gbrd.css';
import '../../css/w/wdencf02y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ohw09gbrd"/><path class="wdencf02y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:screencast"} {...others} />);
}

export default Component;
