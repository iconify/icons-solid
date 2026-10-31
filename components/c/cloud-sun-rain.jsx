import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s2jhl3wdg.css';
import '../../css/f/f96tanboz.css';
import '../../css/r/rbfijdg-s.css';
import '../../css/j/jonhdgbec.css';
import '../../css/l/lcctmzbhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="s2jhl3wdg wm-shadow"/><path class="f96tanboz"/><path class="rbfijdg-s"/><path class="jonhdgbec"/><path class="lcctmzbhv wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cloud-sun-rain"} {...others} />);
}

export default Component;
