import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fku6--sxs.css';
import '../../css/u/uo7ud1b4w.css';
import '../../css/t/tg6vyv3do.css';
import '../../css/a/acwk9qbkt.css';
import '../../css/e/e_466bh1b.css';
import '../../css/d/dfkb1eb4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fku6--sxs"/><path class="uo7ud1b4w"/><path class="tg6vyv3do"/><path class="acwk9qbkt"/><path class="e_466bh1b"/><path class="dfkb1eb4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-broken"} {...others} />);
}

export default Component;
