import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/p/p_pn7rlrf.css';
import '../../css/x/xp9elzbco.css';
import '../../css/y/yjasbng3p.css';
import '../../css/u/uw0dm6bbf.css';
import '../../css/b/bbvkm5kve.css';
import '../../css/z/z5xw3mbmi.css';
import '../../css/p/p7s_rz_8l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="p_pn7rlrf"/><path class="xp9elzbco"/><path class="yjasbng3p"/><path class="uw0dm6bbf"/><path class="bbvkm5kve"/><path class="z5xw3mbmi"/><path class="p7s_rz_8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:meteor"} {...others} />);
}

export default Component;
