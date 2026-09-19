import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mn_k5hbmp.css';
import '../../css/z/z-z89cbqm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="mn_k5hbmp"/><path class="z-z89cbqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:click-tap-two"} {...others} />);
}

export default Component;
