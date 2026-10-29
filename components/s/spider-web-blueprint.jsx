import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hunaykbua.css';
import '../../css/p/pisd0hb5m.css';
import '../../css/u/ukd3-oy9k.css';
import '../../css/b/bnmgfjkwp.css';
import '../../css/p/pdm4jiogk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="hunaykbua wm-deco"/><path class="pisd0hb5m wm-deco"/><path class="ukd3-oy9k wm-deco"/><path class="bnmgfjkwp"/><path class="pdm4jiogk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:spider-web-blueprint"} {...others} />);
}

export default Component;
