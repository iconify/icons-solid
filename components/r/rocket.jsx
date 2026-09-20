import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otgrjjbfe.css';
import '../../css/x/xbx_hjq4s.css';
import '../../css/y/y2geoqb8d.css';
import '../../css/h/hs318fz_d.css';
import '../../css/a/a640iobdv.css';
import '../../css/i/igpuklb5e.css';
import '../../css/k/kjxug11_k.css';
import '../../css/q/qc9woq1oy.css';
import '../../css/l/lcy0zjb3p.css';
import '../../css/z/zab_o6b6z.css';
import '../../css/d/dw3rndxhu.css';
import '../../css/g/gbc5fxbxp.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="otgrjjbfe"/><path class="xbx_hjq4s"/><path class="y2geoqb8d"/><path class="hs318fz_d"/><path class="a640iobdv"/><path class="igpuklb5e"/><path class="kjxug11_k"/><path class="qc9woq1oy"/><path class="lcy0zjb3p"/><path class="zab_o6b6z"/><path class="dw3rndxhu"/><path class="gbc5fxbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rocket"} {...others} />);
}

export default Component;
