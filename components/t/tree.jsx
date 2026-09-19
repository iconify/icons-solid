import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/h7xmtybht.css';
import '../../css/g/g9bdn3bvz.css';
import '../../css/s/sl_4gg8sm.css';
import '../../css/z/z4269320o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="h7xmtybht"/><path class="g9bdn3bvz"/><path class="sl_4gg8sm"/><path class="z4269320o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tree"} {...others} />);
}

export default Component;
