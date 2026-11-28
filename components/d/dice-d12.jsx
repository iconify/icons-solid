import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mc3mgsj4s.css';
import '../../css/g/gf0tmd4ae.css';
import '../../css/s/s_pjkubwx.css';
import '../../css/p/pn14c0bsy.css';
import '../../css/u/umkz692mm.css';
import '../../css/j/jff7_x18f.css';
import '../../css/i/ik28kactb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mc3mgsj4s"/><path class="gf0tmd4ae"/><path class="s_pjkubwx"/><path class="pn14c0bsy"/><path class="umkz692mm"/><path class="jff7_x18f"/><path class="ik28kactb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:dice-d12"} {...others} />);
}

export default Component;
