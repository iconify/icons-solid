import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/at5l-wbup.css';
import '../../css/b/b8h4ybbbd.css';
import '../../css/q/qjf92tb9y.css';
import '../../css/u/uw1lo-x-x.css';
import '../../css/z/zmo4h49ym.css';
import '../../css/z/ze2ps5bam.css';
import '../../css/t/tpl2lf6ja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="at5l-wbup wm-k"/><path class="b8h4ybbbd wm-deco"/><path class="qjf92tb9y wm-k"/><path class="uw1lo-x-x wm-k"/><path class="wm-shadow zmo4h49ym"/><path class="wm-shine ze2ps5bam"/><path class="tpl2lf6ja wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:alert-circle"} {...others} />);
}

export default Component;
