import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/a/auegeyb6b.css';
import '../../css/t/ta1txdbuz.css';
import '../../css/z/z6pxmpb8l.css';
import '../../css/y/ye-rh0b6u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="auegeyb6b"/><path class="ta1txdbuz"/><path class="z6pxmpb8l"/><path class="ye-rh0b6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:industrial-scales"} {...others} />);
}

export default Component;
