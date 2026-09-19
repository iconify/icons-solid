import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/b/bl_52xb0t.css';
import '../../css/n/np5rx5hvg.css';
import '../../css/l/lt1n64b6s.css';
import '../../css/u/u6wj_zbic.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="bl_52xb0t"/><path class="np5rx5hvg"/><path class="lt1n64b6s"/><path class="u6wj_zbic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:es-ib"} {...others} />);
}

export default Component;
