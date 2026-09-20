import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w2exqhbyi.css';
import '../../css/q/qqaujvb9x.css';
import '../../css/k/kg9tatb-r.css';

const viewBox = {"width":64,"height":64};
const content = `<g class="d2kvgvbvc"><path class="w2exqhbyi"/><path class="qqaujvb9x"/><path class="kg9tatb-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:rapid-api"} {...others} />);
}

export default Component;
