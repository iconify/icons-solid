import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5hgltbbc.css';
import '../../css/e/eg_okr3cn.css';
import '../../css/j/jljovmbaa.css';
import '../../css/a/a4wf8kbjg.css';
import '../../css/s/s5-50zxai.css';
import '../../css/k/knmzvli3x.css';
import '../../css/k/ksdp1cbmd.css';
import '../../css/i/i_j63owpa.css';
import '../../css/a/a58pxw6li.css';
import '../../css/v/v128asw3z.css';
import '../../css/u/ub_234ese.css';
import '../../css/c/cgg3v-t3p.css';
import '../../css/d/dg_jjiw0x.css';
import '../../css/x/xqnk4qbut.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y5hgltbbc"/><path class="eg_okr3cn"/><path class="jljovmbaa"/><path class="a4wf8kbjg"/><path class="s5-50zxai"/><path class="knmzvli3x"/><path class="ksdp1cbmd"/><path class="i_j63owpa"/><path class="a58pxw6li"/><path class="v128asw3z"/><path class="ub_234ese"/><path class="cgg3v-t3p"/><path class="dg_jjiw0x"/><path class="xqnk4qbut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:huginn"} {...others} />);
}

export default Component;
