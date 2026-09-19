import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/h/hn2wqccqf.css';
import '../../css/d/d_w-rw5qb.css';
import '../../css/n/n8karrbkd.css';
import '../../css/n/np_2jveop.css';
import '../../css/x/xcyne6rvb.css';
import '../../css/t/t_yce6bio.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="hn2wqccqf"/><path class="d_w-rw5qb"/><path class="n8karrbkd"/><path class="np_2jveop"/><path class="xcyne6rvb"/><path class="t_yce6bio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:us-nc"} {...others} />);
}

export default Component;
