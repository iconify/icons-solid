import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tha6a3bsa.css';
import '../../css/r/rhaz0i9bb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tha6a3bsa"/><path class="rhaz0i9bb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:analytics-board-graph-line"} {...others} />);
}

export default Component;
