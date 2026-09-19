import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/k/k6ndxgekw.css';
import '../../css/m/mwwjw2bdy.css';
import '../../css/v/v-5e1ufzn.css';
import '../../css/l/lj8d3vbvd.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="k6ndxgekw"/><path class="mwwjw2bdy"/><path class="v-5e1ufzn"/><path class="lj8d3vbvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-ny"} {...others} />);
}

export default Component;
