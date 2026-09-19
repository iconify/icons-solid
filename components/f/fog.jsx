import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/w5etd2brv.css';
import '../../css/y/ytxwh4ahf.css';
import '../../css/m/meuc3b1yt.css';
import '../../css/g/g3yzrjbxq.css';
import '../../css/j/ju_e_xbdi.css';
import '../../css/t/t1x7mcqkb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="w5etd2brv"/><path class="ytxwh4ahf"/><path class="meuc3b1yt"/><path class="g3yzrjbxq"/><path class="ju_e_xbdi"/><path class="t1x7mcqkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fog"} {...others} />);
}

export default Component;
