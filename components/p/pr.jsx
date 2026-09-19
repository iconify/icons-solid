import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/n/nshssv-6h.css';
import '../../css/q/qxfu2d4lb.css';
import '../../css/m/m0fg2bb7t.css';
import '../../css/a/aota5ejaw.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="nshssv-6h"/><path class="qxfu2d4lb"/><path class="m0fg2bb7t"/><path class="aota5ejaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:pr"} {...others} />);
}

export default Component;
