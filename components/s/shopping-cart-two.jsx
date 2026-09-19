import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/h/h5nrwebnt.css';
import '../../css/v/v29mic7-o.css';
import '../../css/c/cpbjz2bak.css';
import '../../css/n/n38ppybho.css';
import '../../css/h/hev96ikkg.css';
import '../../css/y/yj_x9e7fj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="h5nrwebnt"/><path class="v29mic7-o"/><path class="cpbjz2bak"/><path class="n38ppybho"/><circle class="hev96ikkg"/><circle class="yj_x9e7fj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shopping-cart-two"} {...others} />);
}

export default Component;
