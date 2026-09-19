import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nxl4557zu.css';
import '../../css/g/gvptwpbvw.css';
import '../../css/x/xsh8s3irr.css';
import '../../css/s/sb-on7i1d.css';
import '../../css/w/wdeuzrbxs.css';
import '../../css/r/rbfribbyd.css';
import '../../css/a/aqxxmwbcs.css';
import '../../css/d/djqw075hh.css';
import '../../css/b/b8luodj1d.css';
import '../../css/e/ewik5dbzl.css';
import '../../css/i/i30i74b5e.css';
import '../../css/l/lfip2bh9k.css';
import '../../css/l/l62ksrbmn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="nxl4557zu"/><path class="gvptwpbvw"/><path class="xsh8s3irr"/><path class="sb-on7i1d"/><path class="wdeuzrbxs"/><path class="rbfribbyd"/><path class="aqxxmwbcs"/><path class="djqw075hh"/><path class="b8luodj1d"/><path class="ewik5dbzl"/><path class="i30i74b5e"/><path class="lfip2bh9k"/><path class="l62ksrbmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-technologist-dark"} {...others} />);
}

export default Component;
