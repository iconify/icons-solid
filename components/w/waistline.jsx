import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/blfz05bsp.css';
import '../../css/j/jsiqlubia.css';
import '../../css/a/aq85sxbdm.css';
import '../../css/r/ree6hhnkg.css';
import '../../css/e/e_di3rplc.css';
import '../../css/d/dttwowbco.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="blfz05bsp"/><circle class="jsiqlubia"/><path class="aq85sxbdm"/><path class="ree6hhnkg"/><path class="e_di3rplc"/><path class="dttwowbco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:waistline"} {...others} />);
}

export default Component;
