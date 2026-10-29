import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_hfeybtu.css';
import '../../css/i/i0xyfbcbs.css';
import '../../css/h/hsmdfrb-z.css';
import '../../css/z/z8o3jsx9q.css';
import '../../css/v/v_zjqioht.css';
import '../../css/b/br0dy_brm.css';
import '../../css/u/u65_f3k4y.css';
import '../../css/n/na2keb42n.css';
import '../../css/x/xpi_n3b4z.css';
import '../../css/n/njw_z54cy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v_hfeybtu wm-shadow"/><path class="i0xyfbcbs wm-shadow"/><path class="hsmdfrb-z"/><path class="z8o3jsx9q"/><path class="v_zjqioht"/><path class="br0dy_brm"/><path class="u65_f3k4y"/><path class="na2keb42n wm-shine"/><path class="wm-shine xpi_n3b4z"/><path class="njw_z54cy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:hash"} {...others} />);
}

export default Component;
