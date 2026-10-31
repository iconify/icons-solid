import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f6nre5nml.css';
import '../../css/l/loot99_vz.css';
import '../../css/j/jf5pg2b8z.css';
import '../../css/h/hskdskbdu.css';
import '../../css/b/bky-jp7xa.css';
import '../../css/n/n7f9fy5-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="f6nre5nml wm-shadow"/><path class="loot99_vz"/><path class="jf5pg2b8z"/><path class="hskdskbdu"/><path class="bky-jp7xa"/><path class="n7f9fy5-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:book-open-check"} {...others} />);
}

export default Component;
