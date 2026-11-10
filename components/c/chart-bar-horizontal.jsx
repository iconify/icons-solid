import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oeb77jooy.css';
import '../../css/j/j0k04pfiu.css';
import '../../css/x/x8vflsbdx.css';
import '../../css/k/kkx07_bvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oeb77jooy"/><path class="j0k04pfiu"/><path class="x8vflsbdx"/><path class="kkx07_bvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-bar-horizontal"} {...others} />);
}

export default Component;
