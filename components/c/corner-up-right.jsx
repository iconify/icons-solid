import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/bfb1rjbme.css';
import '../../css/e/evej9ie1j.css';
import '../../css/t/tovtm7e3b.css';
import '../../css/a/a3r6-87cu.css';
import '../../css/q/q0dx_gbfv.css';
import '../../css/a/axzrrmbfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="bfb1rjbme wm-shadow"/><path class="evej9ie1j"/><path class="tovtm7e3b"/><path class="a3r6-87cu"/><path class="q0dx_gbfv wm-shine"/><path class="axzrrmbfz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:corner-up-right"} {...others} />);
}

export default Component;
