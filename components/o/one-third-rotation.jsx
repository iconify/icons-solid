import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mb9z8v2ur.css';
import '../../css/h/hafszr1ue.css';
import '../../css/r/rb0lxrxek.css';
import '../../css/v/v9gu8mbbm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="mb9z8v2ur"/><path class="hafszr1ue"/><path class="rb0lxrxek"/><path class="v9gu8mbbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:one-third-rotation"} {...others} />);
}

export default Component;
