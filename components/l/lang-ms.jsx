import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/j2tqdmbyh.css';
import '../../css/a/alj1i57yp.css';
import '../../css/m/m8qmwccqb.css';
import '../../css/c/cibj5pwcl.css';
import '../../css/r/r-9gok_pq.css';
import '../../css/f/f5m9fsb4b.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="j2tqdmbyh"/><path class="alj1i57yp"/><path class="m8qmwccqb"/><g class="cibj5pwcl"><path class="r-9gok_pq"/><path class="f5m9fsb4b"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-ms"} {...others} />);
}

export default Component;
