import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yz288vb6i.css';
import '../../css/x/x_0aj0tuo.css';
import '../../css/g/ghi2mimuv.css';
import '../../css/w/w_rz_dbet.css';
import '../../css/m/m933bbbub.css';
import '../../css/x/x9_-dnb2u.css';
import '../../css/a/a0sl_fb4s.css';
import '../../css/k/kjx2i_uqk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="yz288vb6i"/><path class="x_0aj0tuo"/><path class="ghi2mimuv"/><path class="w_rz_dbet"/><path class="m933bbbub"/><path class="x9_-dnb2u"/><path class="a0sl_fb4s"/><path class="kjx2i_uqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fence-two"} {...others} />);
}

export default Component;
