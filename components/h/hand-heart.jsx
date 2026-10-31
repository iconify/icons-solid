import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cyzpj9jee.css';
import '../../css/q/ql7uiwbhy.css';
import '../../css/h/hr7gqhxqi.css';
import '../../css/i/ikfu4upyn.css';
import '../../css/r/rjodl_mhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cyzpj9jee wm-shadow"/><path class="ql7uiwbhy"/><path class="hr7gqhxqi"/><path class="ikfu4upyn"/><path class="rjodl_mhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:hand-heart"} {...others} />);
}

export default Component;
