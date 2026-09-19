import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fu68vabvx.css';
import '../../css/n/noo2m29ib.css';
import '../../css/b/b2n3vku2e.css';
import '../../css/v/vnfj97bbi.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="fu68vabvx"/><path class="noo2m29ib"/><path class="b2n3vku2e"/><path class="vnfj97bbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-kr"} {...others} />);
}

export default Component;
