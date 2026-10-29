import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1z991kec.css';
import '../../css/u/uujyq5bpf.css';
import '../../css/r/r0oyw2bco.css';
import '../../css/j/jx-8r8b5e.css';
import '../../css/w/wt0-scc2y.css';
import '../../css/g/gu1btbbvn.css';
import '../../css/u/u0-18pbsk.css';
import '../../css/a/arjuv_nas.css';
import '../../css/i/ic87razry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a1z991kec wm-shadow"/><path class="uujyq5bpf wm-shadow"/><path class="r0oyw2bco"/><path class="jx-8r8b5e"/><path class="wt0-scc2y"/><path class="gu1btbbvn"/><path class="u0-18pbsk wm-shine"/><path class="arjuv_nas wm-shine"/><path class="ic87razry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:code"} {...others} />);
}

export default Component;
