import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wti-yl3qh.css';
import '../../css/a/az8275bib.css';
import '../../css/e/e5rj73bfg.css';
import '../../css/p/pfodkzbrw.css';
import '../../css/d/dg5kmnbiz.css';
import '../../css/s/s_5t89-8a.css';
import '../../css/j/jcgb4nb-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wti-yl3qh"/><path class="az8275bib"/><path class="e5rj73bfg"/><path class="pfodkzbrw wm-k"/><path class="dg5kmnbiz wm-a"/><path class="s_5t89-8a"/><path class="jcgb4nb-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:fireplace"} {...others} />);
}

export default Component;
