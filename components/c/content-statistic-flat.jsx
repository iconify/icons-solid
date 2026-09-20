import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvituwbuw.css';
import '../../css/y/ykvsl45ph.css';
import '../../css/u/u1tlnx57q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yvituwbuw"/><path clip-rule="evenodd" class="ykvsl45ph"/><path class="u1tlnx57q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:content-statistic-flat"} {...others} />);
}

export default Component;
