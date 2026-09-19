import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/q59e6nb7s.css';
import '../../css/o/otc0fobjz.css';
import '../../css/q/qhk75d-ii.css';
import '../../css/c/cibj5pwcl.css';
import '../../css/e/e287swkfx.css';
import '../../css/s/svynlqbzt.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="q59e6nb7s"/><path class="otc0fobjz"/><path class="qhk75d-ii"/><g class="cibj5pwcl"><path class="e287swkfx"/><path class="svynlqbzt"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-bi"} {...others} />);
}

export default Component;
