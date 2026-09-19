import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/my3z0ngsh.css';
import '../../css/h/h6nbuoyxe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="my3z0ngsh"/><path class="h6nbuoyxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:corner-down-left"} {...others} />);
}

export default Component;
