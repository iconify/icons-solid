import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/ly2xvod5y.css';
import '../../css/v/vrfh-0b0p.css';
import '../../css/o/ou5yvfhnw.css';
import '../../css/v/v68104bje.css';
import '../../css/e/eo37e3b2g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ly2xvod5y"/><path class="vrfh-0b0p"/><path class="ou5yvfhnw"/><path class="v68104bje"/><path class="eo37e3b2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:text-style"} {...others} />);
}

export default Component;
