import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kv_a-29mw.css';
import '../../css/l/l0aa-_btf.css';
import '../../css/x/xs1xk4b4d.css';
import '../../css/k/k9xa-hf0s.css';
import '../../css/v/v3bem4bzh.css';
import '../../css/u/u51l149nk.css';
import '../../css/k/ky2pw4b-c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kv_a-29mw"/><path class="l0aa-_btf"/><path class="xs1xk4b4d"/><path class="k9xa-hf0s"/><path class="v3bem4bzh"/><path class="u51l149nk"/><path class="ky2pw4b-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:tags-refresh"} {...others} />);
}

export default Component;
