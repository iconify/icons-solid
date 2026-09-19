import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/ax7fv8beq.css';
import '../../css/c/cqpnullqh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ax7fv8beq"/><path class="cqpnullqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:freeze-column"} {...others} />);
}

export default Component;
