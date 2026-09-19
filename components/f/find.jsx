import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mxaazra7v.css';
import '../../css/l/l54ohfuze.css';
import '../../css/v/v-cwrbbvd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="mxaazra7v"/><path class="l54ohfuze"/><path class="v-cwrbbvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:find"} {...others} />);
}

export default Component;
