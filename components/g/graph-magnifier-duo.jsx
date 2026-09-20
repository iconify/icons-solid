import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ykbbngpem.css';
import '../../css/b/b3dvy5c1e.css';
import '../../css/o/oln7yac6x.css';
import '../../css/a/aps6fccih.css';
import '../../css/k/kpp4cjnxv.css';
import '../../css/n/n_299j6vg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ykbbngpem"/><path class="b3dvy5c1e"/><path class="oln7yac6x"/><path class="aps6fccih"/><path class="kpp4cjnxv"/><path class="n_299j6vg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:graph-magnifier-duo"} {...others} />);
}

export default Component;
