import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rus0xyb_e.css';
import '../../css/c/cz8xhdbtk.css';
import '../../css/o/o2xedmcxo.css';
import '../../css/k/ked4_wnmx.css';
import '../../css/h/h7d4_pbdw.css';
import '../../css/n/na93g3bor.css';
import '../../css/a/a7e2u6jij.css';
import '../../css/v/vikz3kzhy.css';
import '../../css/i/iizonrwpl.css';
import '../../css/g/gmj7hvb6l.css';
import '../../css/v/vvhk6b0xr.css';
import '../../css/b/b8vxv9obt.css';
import '../../css/j/jfb62nrvs.css';
import '../../css/k/k_bnffb3i.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="rus0xyb_e"/><path class="cz8xhdbtk"/><path class="o2xedmcxo"/><path class="ked4_wnmx"/><path class="h7d4_pbdw"/><path class="na93g3bor"/><path class="a7e2u6jij"/><path class="vikz3kzhy"/><path class="iizonrwpl"/><path class="gmj7hvb6l"/><path class="vvhk6b0xr"/><path class="b8vxv9obt"/><path class="jfb62nrvs"/><path class="k_bnffb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:person-raising-hand"} {...others} />);
}

export default Component;
