import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nb5a1ubht.css';
import '../../css/o/okhot3btz.css';
import '../../css/m/mdi54bckg.css';
import '../../css/c/chfys9p0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nb5a1ubht"/><path class="okhot3btz"/><path class="mdi54bckg"/><path class="chfys9p0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:origami-paper-bird"} {...others} />);
}

export default Component;
