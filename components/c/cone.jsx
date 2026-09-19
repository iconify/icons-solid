import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/amd3c_7ux.css';
import '../../css/a/azfqzgbgh.css';
import '../../css/l/l6kmrgbaq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><ellipse class="amd3c_7ux"/><path class="azfqzgbgh"/><path class="l6kmrgbaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cone"} {...others} />);
}

export default Component;
