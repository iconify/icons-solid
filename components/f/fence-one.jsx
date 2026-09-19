import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vyhhi_kfh.css';
import '../../css/j/jbe84opow.css';
import '../../css/a/af-1crkwt.css';
import '../../css/p/pa_f9nb5a.css';
import '../../css/u/u867avlpo.css';
import '../../css/q/q582we1tm.css';
import '../../css/n/nkav3-r6l.css';
import '../../css/o/oqojlnb-z.css';
import '../../css/b/b4uqyjbik.css';
import '../../css/g/gajrq28bq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="vyhhi_kfh"/><path class="jbe84opow"/><path class="af-1crkwt"/><path class="pa_f9nb5a"/><path class="u867avlpo"/><path class="q582we1tm"/><path class="nkav3-r6l"/><path class="oqojlnb-z"/><path class="b4uqyjbik"/><path class="gajrq28bq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fence-one"} {...others} />);
}

export default Component;
