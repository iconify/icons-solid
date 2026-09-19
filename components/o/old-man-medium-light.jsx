import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmkv5lbeo.css';
import '../../css/q/qejv09bco.css';
import '../../css/m/m8rtqacmb.css';
import '../../css/h/hdr9guboz.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/j/jho16t1sq.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/x/xssxhhjee.css';
import '../../css/q/qyu3b2bin.css';
import '../../css/a/apfn0t5mn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="mmkv5lbeo"/><path class="qejv09bco"/><path class="m8rtqacmb"/><path class="hdr9guboz"/><path class="ps7z7wb7n"/><path class="jho16t1sq"/><path class="pa_yjac-e"/><path class="xssxhhjee"/><path class="qyu3b2bin"/><path class="apfn0t5mn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:old-man-medium-light"} {...others} />);
}

export default Component;
