import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fz4g6ybxa.css';
import '../../css/g/gvilvubwg.css';

const viewBox = {"width":64,"height":64};
const content = `<g class="ft5dv1b6b"><path class="fz4g6ybxa"/><path class="gvilvubwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:workday"} {...others} />);
}

export default Component;
