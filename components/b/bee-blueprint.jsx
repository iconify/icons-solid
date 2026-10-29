import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dix8kzfkx.css';
import '../../css/v/vur_a_bje.css';
import '../../css/n/ncgacjnek.css';
import '../../css/o/o4em-hsef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="dix8kzfkx wm-deco"/><path class="vur_a_bje wm-deco"/><path class="ncgacjnek wm-deco"/><path class="o4em-hsef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bee-blueprint"} {...others} />);
}

export default Component;
