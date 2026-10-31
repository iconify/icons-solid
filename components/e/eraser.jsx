import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cxhyijbuc.css';
import '../../css/d/dm5lvfmui.css';
import '../../css/l/lcksxeh6s.css';
import '../../css/a/ajllqld8g.css';
import '../../css/f/feucwswsf.css';
import '../../css/w/wndbz6bgy.css';
import '../../css/a/a96em2a5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="cxhyijbuc"/><path class="dm5lvfmui"/><path class="lcksxeh6s wm-shine"/><path class="ajllqld8g wm-k"/><path class="feucwswsf wm-a"/><path class="wndbz6bgy"/><path class="a96em2a5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:eraser"} {...others} />);
}

export default Component;
