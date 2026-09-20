import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j33_m7dfh.css';
import '../../css/c/cymhzmlmz.css';
import '../../css/p/pgi2dyb-k.css';
import '../../css/y/yraskmbwm.css';
import '../../css/g/gf4dn1brx.css';
import '../../css/u/ugmn3vogi.css';
import '../../css/o/oq6ycocyc.css';
import '../../css/f/flek8m7fa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j33_m7dfh"/><path class="cymhzmlmz"/><path class="pgi2dyb-k"/><path class="yraskmbwm"/><path class="gf4dn1brx"/><path class="ugmn3vogi"/><path class="oq6ycocyc"/><path class="flek8m7fa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:award-ribbon-star-1"} {...others} />);
}

export default Component;
