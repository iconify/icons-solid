import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptphydo2o.css';
import '../../css/y/yhhga6boj.css';
import '../../css/y/ydr3m1shw.css';
import '../../css/p/plm38chdi.css';
import '../../css/z/zzkg6ftdb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="ptphydo2o"/><circle class="yhhga6boj"/><rect class="ydr3m1shw"/><rect class="plm38chdi"/><path class="zzkg6ftdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:phonograph"} {...others} />);
}

export default Component;
