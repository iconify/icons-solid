import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/w/we9ofbgss.css';
import '../../css/y/yjgfdpbqp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="we9ofbgss"/><path class="yjgfdpbqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:digital-watches"} {...others} />);
}

export default Component;
