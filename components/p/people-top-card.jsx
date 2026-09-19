import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hqcxrbhxw.css';
import '../../css/t/ttsjhbbkm.css';
import '../../css/n/nk_6hob_l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hqcxrbhxw"/><circle class="ttsjhbbkm"/><path class="nk_6hob_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:people-top-card"} {...others} />);
}

export default Component;
