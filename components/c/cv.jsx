import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/ccoigbc9k.css';
import '../../css/l/lo_xr5tqj.css';
import '../../css/p/pqze159nv.css';
import '../../css/i/iue-6fg7z.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ccoigbc9k"/><path class="lo_xr5tqj"/><path class="pqze159nv"/><path class="iue-6fg7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:cv"} {...others} />);
}

export default Component;
