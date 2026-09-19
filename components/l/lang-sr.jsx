import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/aafymk54s.css';
import '../../css/i/ixc5v1_hg.css';
import '../../css/p/p1-6n5bow.css';
import '../../css/q/qjrhhdc2q.css';
import '../../css/o/oeuhaobhk.css';
import '../../css/p/pch3fpa9k.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="aafymk54s"/><path class="ixc5v1_hg"/><path class="p1-6n5bow"/><path class="qjrhhdc2q"/><path class="oeuhaobhk"/><path class="pch3fpa9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-sr"} {...others} />);
}

export default Component;
