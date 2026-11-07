import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk-c-dr8y.css';
import '../../css/q/qv7-4y_3h.css';
import '../../css/i/i42-flb7s.css';
import '../../css/j/jqdefod9t.css';
import '../../css/b/b01kjwbuu.css';
import '../../css/u/udxku7bon.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/oz-krabfm.css';
import '../../css/f/f1qhdqs6k.css';
import '../../css/w/w9un5bbbq.css';
import '../../css/q/qq-hfh-4y.css';
import '../../css/g/gdy5415jd.css';
import '../../css/x/x8-2uo2xi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dk-c-dr8y"/><path class="qv7-4y_3h"/><path class="i42-flb7s"/><path class="jqdefod9t"/><path class="b01kjwbuu"/><path clip-rule="evenodd" class="udxku7bon"/><g class="xtpeb-edw"><path class="oz-krabfm"/><path class="f1qhdqs6k"/><path class="w9un5bbbq"/><path class="qq-hfh-4y"/><path class="gdy5415jd"/><path class="x8-2uo2xi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-replace-bold-duotone"} {...others} />);
}

export default Component;
