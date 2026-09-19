import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/t/t7vkg9zjn.css';
import '../../css/k/k3ksccc2w.css';
import '../../css/x/x72ys60gu.css';
import '../../css/k/kuujrvmcb.css';
import '../../css/k/kg79jrbam.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="t7vkg9zjn"/><path class="k3ksccc2w"/><path class="x72ys60gu"/><path class="kuujrvmcb"/><path class="kg79jrbam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:kn"} {...others} />);
}

export default Component;
