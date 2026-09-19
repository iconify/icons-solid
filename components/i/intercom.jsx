import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/on0dm2bco.css';
import '../../css/x/xm85kvbbe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="on0dm2bco"/><path class="xm85kvbbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:intercom"} {...others} />);
}

export default Component;
