import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/caotkhujs.css';
import '../../css/e/ego_wqbhh.css';
import '../../css/l/lrbbp143h.css';
import '../../css/t/t72hk87pf.css';
import '../../css/b/b9zmcgb-o.css';
import '../../css/y/ya-7q4byn.css';
import '../../css/f/fk08jwbtz.css';
import '../../css/q/qxmglbcri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="caotkhujs wm-k"/><path class="ego_wqbhh wm-k"/><path class="lrbbp143h wm-k"/><path class="t72hk87pf wm-k"/><path class="b9zmcgb-o wm-shine"/><path class="wm-s ya-7q4byn"/><path class="fk08jwbtz wm-s"/><path class="qxmglbcri wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:filter-x"} {...others} />);
}

export default Component;
