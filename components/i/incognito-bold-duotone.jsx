import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xte30hbrs.css';
import '../../css/u/ufcvxubwa.css';
import '../../css/d/dogmykb7z.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/t0_5lgbdo.css';
import '../../css/n/nmse1bcme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xte30hbrs"/><path class="ufcvxubwa"/><path class="dogmykb7z"/><g class="mc2zb0bvp"><path class="t0_5lgbdo"/><path class="nmse1bcme"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:incognito-bold-duotone"} {...others} />);
}

export default Component;
