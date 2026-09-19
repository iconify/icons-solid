import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/q/qzawyhbdo.css';
import '../../css/c/c7b8r-bgz.css';
import '../../css/l/lhtpemjiw.css';
import '../../css/d/dzvhn5-sy.css';
import '../../css/n/ng2xfabay.css';
import '../../css/l/lozhjabns.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="qzawyhbdo"/><path class="c7b8r-bgz"/><path class="lhtpemjiw"/><path class="dzvhn5-sy"/><path class="ng2xfabay"/><path class="lozhjabns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:certificate"} {...others} />);
}

export default Component;
