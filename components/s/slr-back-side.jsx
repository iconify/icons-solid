import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5hy1h1vo.css';
import '../../css/p/p_rr2wbrh.css';
import '../../css/p/p1sv_vbef.css';
import '../../css/a/a7or9tihb.css';
import '../../css/f/f4uhvrbjt.css';
import '../../css/v/vt34-hbss.css';
import '../../css/a/ajrcklbyb.css';
import '../../css/t/ttdj747sm.css';
import '../../css/w/wme3onbnp.css';
import '../../css/q/qo0dh0ldp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t5hy1h1vo"/><path class="p_rr2wbrh"/><path class="p1sv_vbef"/><circle class="a7or9tihb"/><path class="f4uhvrbjt"/><g class="vt34-hbss"><path class="ajrcklbyb"/><circle class="ttdj747sm"/><circle class="wme3onbnp"/><circle class="qo0dh0ldp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:slr-back-side"} {...others} />);
}

export default Component;
