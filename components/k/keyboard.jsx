import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jla_1tf4y.css';
import '../../css/t/tn4ed8o-x.css';
import '../../css/z/zlv53abcg.css';
import '../../css/i/izfpa27yi.css';
import '../../css/e/endkzgbnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jla_1tf4y wm-shadow"/><path class="tn4ed8o-x"/><path class="zlv53abcg"/><path class="izfpa27yi"/><path class="endkzgbnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:keyboard"} {...others} />);
}

export default Component;
