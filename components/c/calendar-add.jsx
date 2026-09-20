import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/x4f1in-9g.css';
import '../../css/n/nxskubcdw.css';
import '../../css/b/bf3duhbgn.css';
import '../../css/q/qnoze7b4k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="x4f1in-9g"/><path class="nxskubcdw"/><path class="bf3duhbgn"/><path class="qnoze7b4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:calendar-add"} {...others} />);
}

export default Component;
