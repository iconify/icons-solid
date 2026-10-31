import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ddnvz1tnc.css';
import '../../css/g/gdp166b8a.css';
import '../../css/p/pb3f6qbdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ddnvz1tnc wm-k"/><path class="gdp166b8a wm-shine"/><path class="pb3f6qbdb wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:book-open-text"} {...others} />);
}

export default Component;
