import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/epchynlxc.css';
import '../../css/e/e9g8fgbfl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="epchynlxc"/><path class="e9g8fgbfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:monitor-sharp-fill"} {...others} />);
}

export default Component;
