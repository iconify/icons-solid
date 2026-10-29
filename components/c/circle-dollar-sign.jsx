import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pkgr03atr.css';
import '../../css/m/m1y1q9lxd.css';
import '../../css/v/vexzfqtjh.css';
import '../../css/a/a9p-poe3h.css';
import '../../css/o/oz9fb5biz.css';
import '../../css/i/ii1hn--6r.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="pkgr03atr wm-shadow"/><path class="m1y1q9lxd"/><path class="vexzfqtjh"/><path class="a9p-poe3h"/><path class="oz9fb5biz wm-shine"/><path class="ii1hn--6r wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:circle-dollar-sign"} {...others} />);
}

export default Component;
