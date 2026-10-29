import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0p377wpb.css';
import '../../css/f/f3cst6b1w.css';
import '../../css/e/ej9pk_xvg.css';
import '../../css/c/c0hbpgc9l.css';
import '../../css/g/gd237klye.css';
import '../../css/b/bl932bc8m.css';
import '../../css/l/ljnfe5bpa.css';
import '../../css/j/j0z6k879b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o0p377wpb wm-shadow"/><path class="f3cst6b1w wm-k"/><path class="ej9pk_xvg wm-k"/><path class="c0hbpgc9l wm-k"/><path class="gd237klye wm-k"/><path class="bl932bc8m wm-k"/><path class="ljnfe5bpa wm-shine"/><path class="j0z6k879b wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:avatar-dino"} {...others} />);
}

export default Component;
