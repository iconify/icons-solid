import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s1_ud7bjl.css';
import '../../css/x/x84gdyb8n.css';
import '../../css/y/yodkqbcpl.css';
import '../../css/r/rgj8_flnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s1_ud7bjl"/><path class="x84gdyb8n"/><path class="yodkqbcpl"/><path class="rgj8_flnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-broken-bold"} {...others} />);
}

export default Component;
