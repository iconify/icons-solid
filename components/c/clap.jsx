import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/f0q-rf0sp.css';
import '../../css/u/u_l9bkbui.css';
import '../../css/v/vcm7qkl4f.css';
import '../../css/c/cendfhuyv.css';
import '../../css/u/ubk0865zb.css';
import '../../css/c/cs204wbct.css';
import '../../css/i/i0hruhb-y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="f0q-rf0sp"/><path class="u_l9bkbui"/><path class="vcm7qkl4f"/><path class="cendfhuyv"/><path class="ubk0865zb"/><path class="cs204wbct"/><path class="i0hruhb-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clap"} {...others} />);
}

export default Component;
