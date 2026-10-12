import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d5rfbhblx.css';
import '../../css/w/wxh8sffee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d5rfbhblx"/><path class="wxh8sffee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-triangle"} {...others} />);
}

export default Component;
