import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/uhzhoz_lg.css';
import '../../css/t/t1l8wac3t.css';
import '../../css/i/iucmbeysh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="uhzhoz_lg"/><path class="t1l8wac3t"/><path class="iucmbeysh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:outgoing"} {...others} />);
}

export default Component;
