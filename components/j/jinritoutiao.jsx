import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xr40_vbus.css';
import '../../css/d/d9jv9cq1e.css';
import '../../css/j/jw1_ivbix.css';
import '../../css/r/rcxo0abxy.css';
import '../../css/g/gl1414b_e.css';
import '../../css/y/yhrrjmblo.css';
import '../../css/a/ao_u_bc1v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<mask id="svgIDa"><g class="ft5dv1b6b"><path class="xr40_vbus"/><path class="d9jv9cq1e"/><path class="jw1_ivbix"/><path class="rcxo0abxy"/><path class="gl1414b_e"/><path class="yhrrjmblo"/><path class="ao_u_bc1v"/></g></mask><path mask="url(#svgIDa)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:jinritoutiao"} {...others} />);
}

export default Component;
