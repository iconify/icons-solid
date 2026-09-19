import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/oa0-72i1l.css';
import '../../css/q/qu5nk8u-q.css';
import '../../css/p/p9ojn-bgd.css';
import '../../css/o/oa9d-wg2b.css';
import '../../css/u/uar13_bfl.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="oa0-72i1l"/><path class="qu5nk8u-q"/><path class="p9ojn-bgd"/><path class="oa9d-wg2b"/><path class="uar13_bfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-uz"} {...others} />);
}

export default Component;
