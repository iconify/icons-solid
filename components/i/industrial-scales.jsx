import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/u/ut4zexbff.css';
import '../../css/t/ta1txdbuz.css';
import '../../css/t/t4se1zgst.css';
import '../../css/y/ye-rh0b6u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ut4zexbff"/><path class="ta1txdbuz"/><path class="t4se1zgst"/><path class="ye-rh0b6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:industrial-scales"} {...others} />);
}

export default Component;
