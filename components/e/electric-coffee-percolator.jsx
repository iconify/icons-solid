import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of2hnkwgi.css';
import '../../css/g/ggi2-hbno.css';
import '../../css/i/id8aqacyn.css';
import '../../css/h/h2gpoacws.css';
import '../../css/b/bp__kbb4m.css';
import '../../css/k/kdh1r2nzr.css';
import '../../css/j/j2j7aug5i.css';
import '../../css/r/r93gd2bgc.css';
import '../../css/w/wfvhl93-a.css';
import '../../css/l/lsfxl-r-f.css';
import '../../css/q/qy3b19bqh.css';
import '../../css/b/btarieckn.css';
import '../../css/f/fws1n7bes.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="of2hnkwgi"/><path class="ggi2-hbno"/><path clip-rule="evenodd" class="id8aqacyn"/><path clip-rule="evenodd" class="h2gpoacws"/><path clip-rule="evenodd" class="bp__kbb4m"/><circle class="kdh1r2nzr"/><path class="j2j7aug5i"/><path class="r93gd2bgc"/><path class="wfvhl93-a"/><path class="lsfxl-r-f"/><path class="qy3b19bqh"/><path class="btarieckn"/><path class="fws1n7bes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:electric-coffee-percolator"} {...others} />);
}

export default Component;
