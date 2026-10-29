import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/np1o_hbeb.css';
import '../../css/y/yeja1yb7d.css';
import '../../css/u/us2ibl8gx.css';
import '../../css/x/xjg6p3baz.css';
import '../../css/c/cx9tddlgw.css';
import '../../css/m/mika2zbzn.css';
import '../../css/v/vclaqt84l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="np1o_hbeb wm-k"/><path class="wm-a yeja1yb7d"/><path class="us2ibl8gx wm-s"/><path class="wm-shadow xjg6p3baz"/><path class="cx9tddlgw wm-k"/><path class="mika2zbzn wm-a"/><path class="vclaqt84l wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:spell-check-engrave"} {...others} />);
}

export default Component;
