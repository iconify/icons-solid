import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/l19gb-b2o.css';
import '../../css/u/udktnefhk.css';
import '../../css/m/mew8rkbaq.css';
import '../../css/b/bq-zlubjd.css';
import '../../css/d/dme8em-ey.css';
import '../../css/o/opng_wbwa.css';
import '../../css/r/r3p6s2bkz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="l19gb-b2o"/><path class="udktnefhk"/><path class="mew8rkbaq"/><circle class="bq-zlubjd"/><rect class="dme8em-ey"/><rect class="opng_wbwa"/><rect class="r3p6s2bkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:anchor-squre"} {...others} />);
}

export default Component;
