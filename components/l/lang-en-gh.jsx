import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/k/ks7llbbob.css';
import '../../css/q/qdvv22ehu.css';
import '../../css/n/niitbfbhy.css';
import '../../css/k/kgls69xgi.css';
import '../../css/e/eo114u_wk.css';
import '../../css/e/eec2tedcw.css';
import '../../css/y/yvjv1pirb.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="ks7llbbob"/><path class="qdvv22ehu"/><path class="niitbfbhy"/><path class="kgls69xgi"/><path class="eo114u_wk"/><path class="eec2tedcw"/><path class="yvjv1pirb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-en-gh"} {...others} />);
}

export default Component;
