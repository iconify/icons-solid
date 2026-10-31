import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yrzt4abnx.css';
import '../../css/q/q6yyvnb5n.css';
import '../../css/w/wkw49hs5o.css';
import '../../css/v/vhrpu8b0l.css';
import '../../css/v/v7_69tbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow yrzt4abnx"/><path class="q6yyvnb5n wm-shadow"/><path class="wkw49hs5o"/><path class="vhrpu8b0l"/><path class="v7_69tbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:mushroom"} {...others} />);
}

export default Component;
