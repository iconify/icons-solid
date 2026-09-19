import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jrxzoxbhe.css';
import '../../css/c/cl58f1ghc.css';
import '../../css/k/ky__jobty.css';
import '../../css/p/p9y0d0b8d.css';
import '../../css/c/c4988mb4j.css';
import '../../css/t/tcqbxxbzf.css';
import '../../css/p/p_nkqrzhr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="jrxzoxbhe"/><path class="cl58f1ghc"/><path class="ky__jobty"/><path class="p9y0d0b8d"/><path class="c4988mb4j"/><path class="tcqbxxbzf"/><path class="p_nkqrzhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:expenses"} {...others} />);
}

export default Component;
