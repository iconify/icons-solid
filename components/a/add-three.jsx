import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b-ol9lbch.css';
import '../../css/f/fcxumdbab.css';
import '../../css/w/wzz019i0g.css';
import '../../css/e/e8xae3b-x.css';
import '../../css/c/ch9gjjqbj.css';
import '../../css/v/vhwlb0afy.css';
import '../../css/s/srmhajood.css';
import '../../css/t/t5f738b5t.css';
import '../../css/d/dkpon-csk.css';
import '../../css/s/sruufquwv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="b-ol9lbch"/><path class="fcxumdbab"/><path class="wzz019i0g"/><path class="e8xae3b-x"/><path class="ch9gjjqbj"/><path class="vhwlb0afy"/><path class="srmhajood"/><path class="t5f738b5t"/><path class="dkpon-csk"/><path class="sruufquwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:add-three"} {...others} />);
}

export default Component;
