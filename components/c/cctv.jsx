import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fs9c7_blv.css';
import '../../css/d/dxyy3kqvu.css';
import '../../css/f/fvn44abpr.css';
import '../../css/d/d1f_w0bxt.css';
import '../../css/e/eyyro6bzv.css';
import '../../css/x/x777nztqs.css';
import '../../css/c/cqm_7sb7d.css';
import '../../css/d/dd0uf_b4q.css';
import '../../css/h/hvk4mmben.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fs9c7_blv wm-shadow"/><path class="dxyy3kqvu wm-k"/><path class="fvn44abpr wm-k"/><path class="d1f_w0bxt wm-k"/><path class="eyyro6bzv wm-k"/><path class="wm-k x777nztqs"/><path class="cqm_7sb7d wm-shine"/><path class="dd0uf_b4q wm-a"/><path class="hvk4mmben wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:cctv"} {...others} />);
}

export default Component;
