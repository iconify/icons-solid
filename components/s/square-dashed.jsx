import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cb5rk3bvp.css';
import '../../css/z/znbsnpbaf.css';
import '../../css/r/rprkwsb7g.css';
import '../../css/d/d0higibga.css';
import '../../css/p/pbkvvoorg.css';
import '../../css/b/betnfdb8x.css';
import '../../css/d/d1pb24eaj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cb5rk3bvp wm-shadow"/><path class="znbsnpbaf"/><path class="rprkwsb7g"/><path class="d0higibga"/><path class="pbkvvoorg"/><path class="betnfdb8x"/><path class="d1pb24eaj wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:square-dashed"} {...others} />);
}

export default Component;
