import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hl7-q1gvd.css';
import '../../css/h/hpmi0jboz.css';
import '../../css/q/q906v6vew.css';
import '../../css/y/yzqc4lmtv.css';
import '../../css/q/q8lq7tgtk.css';
import '../../css/u/unojw2b0m.css';
import '../../css/x/xi-31bcoc.css';
import '../../css/x/xgjfuhteh.css';
import '../../css/e/efoavyrzc.css';
import '../../css/o/opzbwfbcv.css';
import '../../css/s/su9lefb7w.css';
import '../../css/i/ij1m9cctn.css';
import '../../css/k/k7fvdzb-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hl7-q1gvd wm-shadow"/><path class="hpmi0jboz wm-k"/><path class="q906v6vew wm-k"/><path class="wm-k yzqc4lmtv"/><path class="q8lq7tgtk wm-k"/><path class="unojw2b0m wm-k"/><path class="wm-shine xi-31bcoc"/><path class="wm-a xgjfuhteh"/><path class="efoavyrzc wm-a"/><path class="opzbwfbcv wm-a"/><path class="su9lefb7w wm-a"/><path class="ij1m9cctn wm-a"/><path class="k7fvdzb-w wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:plus-circle"} {...others} />);
}

export default Component;
