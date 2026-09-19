import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qlgj23b6m.css';
import '../../css/f/f3l-gju2l.css';
import '../../css/g/gfehfobrh.css';
import '../../css/z/z8sakdbii.css';
import '../../css/g/gfs13nbjb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="qlgj23b6m"/><path class="f3l-gju2l"/><path class="gfehfobrh"/><path class="z8sakdbii"/><path class="gfs13nbjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:link-left"} {...others} />);
}

export default Component;
