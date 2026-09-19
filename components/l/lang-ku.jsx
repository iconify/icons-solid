import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/djxixtxah.css';
import '../../css/t/t3p_-vs5e.css';
import '../../css/i/i1bqeia1p.css';
import '../../css/w/wvxz82bkx.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="djxixtxah"/><path class="t3p_-vs5e"/><path class="i1bqeia1p"/><path class="wvxz82bkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-ku"} {...others} />);
}

export default Component;
