import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m6t9d7bky.css';
import '../../css/e/ei3g7d_fk.css';
import '../../css/v/v8fzrboci.css';
import '../../css/a/ar9hbxyso.css';
import '../../css/l/lpm2e23zo.css';
import '../../css/k/km0rz_boi.css';
import '../../css/e/e_4yofwch.css';
import '../../css/j/jak-_uijv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="m6t9d7bky"/><path class="ei3g7d_fk"/><path class="v8fzrboci"/><path class="ar9hbxyso"/><path class="lpm2e23zo"/><path class="km0rz_boi"/><path class="e_4yofwch"/><path class="jak-_uijv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-3-linear"} {...others} />);
}

export default Component;
