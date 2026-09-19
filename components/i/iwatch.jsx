import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/uaf3_62mx.css';
import '../../css/a/av9l1ko1u.css';
import '../../css/b/basw9ubgc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="uaf3_62mx"/><path class="av9l1ko1u"/><path class="basw9ubgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:iwatch"} {...others} />);
}

export default Component;
