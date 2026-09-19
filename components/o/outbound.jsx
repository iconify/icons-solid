import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mjczpwbmh.css';
import '../../css/l/lenqly58b.css';
import '../../css/h/h79q5vbot.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="mjczpwbmh"/><circle class="lenqly58b"/><path class="h79q5vbot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:outbound"} {...others} />);
}

export default Component;
