import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/di72bv0yj.css';
import '../../css/c/c8h0bxbtq.css';
import '../../css/q/qfxalsbxq.css';
import '../../css/j/jaoqwr_ai.css';
import '../../css/l/lo2z8bp4b.css';
import '../../css/s/sfs98y94q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="di72bv0yj"/><path class="c8h0bxbtq"/><path class="qfxalsbxq"/><path class="jaoqwr_ai"/><path class="lo2z8bp4b"/><path class="sfs98y94q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:cake-five"} {...others} />);
}

export default Component;
