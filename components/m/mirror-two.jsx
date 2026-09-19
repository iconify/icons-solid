import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rifi0464k.css';
import '../../css/m/mcj9j5eld.css';
import '../../css/h/hzoki0byv.css';
import '../../css/n/nw9qq6s-i.css';
import '../../css/o/o5wyabbqw.css';
import '../../css/a/aq6ortcxi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="rifi0464k"/><path class="mcj9j5eld"/><path class="hzoki0byv"/><path class="nw9qq6s-i"/><path class="o5wyabbqw"/><path class="aq6ortcxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mirror-two"} {...others} />);
}

export default Component;
