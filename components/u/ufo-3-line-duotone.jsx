import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hg17webpa.css';
import '../../css/m/m6t9d7bky.css';
import '../../css/e/ei3g7d_fk.css';
import '../../css/v/vo7gr2bvu.css';
import '../../css/i/iz--d2ynu.css';
import '../../css/y/ym68aulta.css';
import '../../css/t/t9zc-2blx.css';
import '../../css/t/ty1oijvex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hg17webpa"/><path class="m6t9d7bky"/><path class="ei3g7d_fk"/><path class="vo7gr2bvu"/><path class="iz--d2ynu"/><path class="ym68aulta"/><path class="t9zc-2blx"/><path class="ty1oijvex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-3-line-duotone"} {...others} />);
}

export default Component;
