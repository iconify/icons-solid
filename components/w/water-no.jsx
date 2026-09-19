import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pxkpnop3z.css';
import '../../css/l/l-t96g0gw.css';
import '../../css/x/x4w0-dtwe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="pxkpnop3z"/><path class="l-t96g0gw"/><path class="x4w0-dtwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:water-no"} {...others} />);
}

export default Component;
