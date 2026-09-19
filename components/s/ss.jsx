import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/quzm9aczy.css';
import '../../css/g/gso7xxbqa.css';
import '../../css/o/o7r7blqjh.css';
import '../../css/t/tdszj-b2p.css';
import '../../css/m/m0fg2bb7t.css';
import '../../css/c/c3v99ollt.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="quzm9aczy"/><path class="gso7xxbqa"/><path class="o7r7blqjh"/><path class="tdszj-b2p"/><path class="m0fg2bb7t"/><path class="c3v99ollt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ss"} {...others} />);
}

export default Component;
