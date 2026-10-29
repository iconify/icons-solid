import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dj_hatb7f.css';
import '../../css/h/h5ssmby7z.css';
import '../../css/t/t-bwteblx.css';
import '../../css/z/z0r-q2b8a.css';
import '../../css/j/j1z-agb8y.css';
import '../../css/x/xjk6ixb-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dj_hatb7f wm-k"/><path class="h5ssmby7z wm-k"/><path class="t-bwteblx wm-k"/><path class="wm-k z0r-q2b8a"/><path class="j1z-agb8y wm-shine"/><path class="wm-k xjk6ixb-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:avatar-dino"} {...others} />);
}

export default Component;
