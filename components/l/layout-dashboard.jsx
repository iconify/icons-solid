import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q96681b5b.css';
import '../../css/w/wm8x5bsks.css';
import '../../css/b/bwcd2tikl.css';
import '../../css/a/a4nia_t6n.css';
import '../../css/n/njg55jbpm.css';
import '../../css/a/adlpfac9r.css';
import '../../css/g/gju7ogbge.css';
import '../../css/c/c_xbv4b5l.css';
import '../../css/u/u5e79gh4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q96681b5b"/><path class="wm8x5bsks"/><path class="bwcd2tikl"/><path class="a4nia_t6n"/><path class="njg55jbpm"/><path class="adlpfac9r"/><path class="gju7ogbge"/><path class="c_xbv4b5l"/><path class="u5e79gh4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:layout-dashboard"} {...others} />);
}

export default Component;
