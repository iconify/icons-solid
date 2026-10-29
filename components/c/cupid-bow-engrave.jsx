import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z_7g_hb8w.css';
import '../../css/d/dyj54qb5a.css';
import '../../css/l/lyshkltnl.css';
import '../../css/h/h6_1hfvax.css';
import '../../css/r/rnnsb1bql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k z_7g_hb8w"/><path class="dyj54qb5a wm-a"/><path class="lyshkltnl wm-shadow"/><path class="h6_1hfvax wm-k"/><path class="rnnsb1bql wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cupid-bow-engrave"} {...others} />);
}

export default Component;
