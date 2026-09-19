import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/ywx3wmbbl.css';
import '../../css/j/jorrj5blu.css';
import '../../css/m/mgmlan4kx.css';
import '../../css/r/rhggsubez.css';
import '../../css/b/bypvlkbwd.css';
import '../../css/y/ye8wd0b2o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle transform="rotate(40 30.075 15.562)" class="ywx3wmbbl"/><path class="jorrj5blu"/><path class="mgmlan4kx"/><circle transform="rotate(40 11.24 19.34)" class="rhggsubez"/><circle transform="rotate(40 28.462 37.707)" class="bypvlkbwd"/><path class="ye8wd0b2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rattle"} {...others} />);
}

export default Component;
