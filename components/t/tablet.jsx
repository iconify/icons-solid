import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d210hgssh.css';
import '../../css/w/w38uudb8g.css';
import '../../css/y/yvkls6lxy.css';
import '../../css/t/t7a0z7mhh.css';
import '../../css/v/vkdfpoces.css';
import '../../css/z/zgl_gabnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d210hgssh wm-k"/><path class="w38uudb8g wm-k"/><path class="wm-k yvkls6lxy"/><path class="t7a0z7mhh wm-shadow"/><path class="vkdfpoces wm-shine"/><path class="wm-shine zgl_gabnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:tablet"} {...others} />);
}

export default Component;
