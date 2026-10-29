import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jxr2syb4f.css';
import '../../css/u/uk6ap4bas.css';
import '../../css/o/okqejirib.css';
import '../../css/z/z414mqbvu.css';
import '../../css/u/u2l711bmk.css';
import '../../css/q/qftj53-6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jxr2syb4f wm-deco"/><path class="uk6ap4bas wm-deco"/><path class="okqejirib wm-deco"/><path class="wm-k z414mqbvu"/><path class="u2l711bmk wm-a"/><path class="qftj53-6n wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:webhook-blueprint"} {...others} />);
}

export default Component;
