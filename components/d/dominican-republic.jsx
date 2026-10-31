import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/q/qa_s9ac9m.css';
import '../../css/t/tkvtvvb0x.css';
import '../../css/u/umu_xqb9g.css';
import '../../css/x/xvb-9zdsg.css';
import '../../css/o/oiq12gulp.css';
import '../../css/w/wcq8j6boa.css';
import '../../css/z/z-1hfgbuj.css';
import '../../css/t/tu1lwob0z.css';
import '../../css/i/idr5yvt3z.css';
import '../../css/e/eulnbpkqr.css';
import '../../css/c/ckvscwb-z.css';
import '../../css/u/u_l3hsi2l.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="qa_s9ac9m"/><path class="tkvtvvb0x"/><path class="umu_xqb9g"/><path class="xvb-9zdsg"/><path class="oiq12gulp"/><path class="wcq8j6boa"/><path class="z-1hfgbuj"/><path class="tu1lwob0z"/><path class="idr5yvt3z"/><path class="eulnbpkqr"/><path class="ckvscwb-z"/><path class="u_l3hsi2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:dominican-republic"} {...others} />);
}

export default Component;
