import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v8m7inbfb.css';
import '../../css/j/jnbt18bdf.css';
import '../../css/t/t_je6obhj.css';
import '../../css/c/c22sqac_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="v8m7inbfb"/><path class="jnbt18bdf wm-k"/><path class="t_je6obhj wm-a"/><path class="c22sqac_e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chinese-knot"} {...others} />);
}

export default Component;
