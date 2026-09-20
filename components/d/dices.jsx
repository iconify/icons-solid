import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/d/dzl9p-b_c.css';
import '../../css/m/m76ddia2g.css';
import '../../css/e/ef60dtb6z.css';
import '../../css/d/djqrqibog.css';
import '../../css/l/lhgr5fubs.css';
import '../../css/g/gfozp-iev.css';
import '../../css/a/amth5xbsw.css';
import '../../css/u/u5cu-9zxt.css';
import '../../css/s/s4chpmeov.css';
import '../../css/c/cxdvj7bet.css';
import '../../css/i/ifzabnx4x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="dzl9p-b_c"/><path class="m76ddia2g"/><path class="ef60dtb6z"/><path class="djqrqibog"/><path class="lhgr5fubs"/><path class="gfozp-iev"/><path class="amth5xbsw"/><path class="u5cu-9zxt"/><path class="s4chpmeov"/><path class="cxdvj7bet"/><path class="ifzabnx4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:dices"} {...others} />);
}

export default Component;
