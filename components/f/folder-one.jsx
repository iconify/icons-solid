import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ehvav10tg.css';
import '../../css/j/jqrq48bfx.css';
import '../../css/q/qvs6rvbpv.css';
import '../../css/a/aa22-i3kz.css';
import '../../css/q/q_2pbxbpq.css';
import '../../css/d/ds-6ybbct.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ehvav10tg"/><circle class="jqrq48bfx"/><path class="qvs6rvbpv"/><path class="aa22-i3kz"/><circle class="q_2pbxbpq"/><path class="ds-6ybbct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:folder-one"} {...others} />);
}

export default Component;
