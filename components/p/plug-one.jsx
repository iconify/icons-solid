import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vbx_e1bgh.css';
import '../../css/t/tskwdnsgg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="vbx_e1bgh"/><path class="tskwdnsgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:plug-one"} {...others} />);
}

export default Component;
