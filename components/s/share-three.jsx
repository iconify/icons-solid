import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/ei8r_uaoc.css';
import '../../css/z/zjkgqpooy.css';
import '../../css/s/s_sqn_0_b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ei8r_uaoc"/><path class="zjkgqpooy"/><path class="s_sqn_0_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:share-three"} {...others} />);
}

export default Component;
