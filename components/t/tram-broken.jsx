import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q2i2-0q8d.css';
import '../../css/q/qy9-4uicp.css';
import '../../css/j/jl627cb0x.css';
import '../../css/v/v7otivbui.css';
import '../../css/c/cw4y0pbzz.css';
import '../../css/v/v6jj4ob5v.css';
import '../../css/x/x4m6n8btz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="q2i2-0q8d"/><path class="qy9-4uicp"/><path class="jl627cb0x"/><path class="v7otivbui"/><path class="cw4y0pbzz"/><path class="v6jj4ob5v"/><path class="x4m6n8btz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tram-broken"} {...others} />);
}

export default Component;
