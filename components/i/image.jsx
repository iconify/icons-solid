import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wtmdgbf5n.css';
import '../../css/m/mnynmob-i.css';
import '../../css/b/b27gr8n3l.css';
import '../../css/o/o1dnzc98i.css';
import '../../css/k/kfqqrbwwm.css';
import '../../css/e/ebuh7_bbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wtmdgbf5n"/><path class="mnynmob-i"/><path class="b27gr8n3l"/><path class="o1dnzc98i"/><path class="kfqqrbwwm"/><path class="ebuh7_bbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:image"} {...others} />);
}

export default Component;
