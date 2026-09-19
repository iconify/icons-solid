import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/qt_9jx42m.css';
import '../../css/d/dffbopb6b.css';
import '../../css/p/pfvhoq-hg.css';
import '../../css/i/idfhmp8ux.css';
import '../../css/w/w3qnlzbed.css';
import '../../css/m/mvw_6unjn.css';
import '../../css/v/vkhxz4sck.css';
import '../../css/f/f_so6ebfq.css';
import '../../css/i/i4wl9yo7g.css';
import '../../css/a/a1g3iybzp.css';
import '../../css/l/l0qi3cscb.css';
import '../../css/j/jznffsblb.css';
import '../../css/e/eo114u_wk.css';
import '../../css/e/eec2tedcw.css';
import '../../css/y/yvjv1pirb.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="qt_9jx42m"/><path class="dffbopb6b"/><path class="pfvhoq-hg"/><path class="idfhmp8ux"/><path class="w3qnlzbed"/><path class="mvw_6unjn"/><path class="vkhxz4sck"/><path class="f_so6ebfq"/><path class="i4wl9yo7g"/><path class="a1g3iybzp"/><path class="l0qi3cscb"/><path class="jznffsblb"/><path class="eo114u_wk"/><path class="eec2tedcw"/><path class="yvjv1pirb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:en-ke"} {...others} />);
}

export default Component;
