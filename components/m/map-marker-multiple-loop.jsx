import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5ce2h.css';
import '../../css/g/g_1xrq.css';
import '../../css/y/yuzzkf.css';
import '../../css/p/pwds4w.css';
import '../../css/q/qw8aly.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/s/s8e22g.css';
import '../../css/w/w9rtnm.css';
import '../../css/s/so-from-48.css';
import '../../css/t/tr-7ecuqx.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGc9Gyoc7l"><path class="c5ce2h g_1xrq yuzzkf"/><path class="g_1xrq pwds4w qw8aly"/></mask></defs><path mask="url(#SVGc9Gyoc7l)" class="lsejuv ydovum"/><path class="g_1xrq pwds4w s8e22g yuzzkf"/><circle class="w9rtnm ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:map-marker-multiple-loop"} {...others} />);
}

export default Component;
