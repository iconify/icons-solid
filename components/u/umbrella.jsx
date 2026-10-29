import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3hix4nsm.css';
import '../../css/a/a3-va2far.css';
import '../../css/x/x929q_bqy.css';
import '../../css/g/gdry08b-w.css';
import '../../css/s/sgonu929r.css';
import '../../css/s/sz969lb6f.css';
import '../../css/y/y0wevo2ez.css';
import '../../css/u/ufb-ltsrk.css';
import '../../css/o/osiy47biv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d3hix4nsm wm-shadow"/><path class="a3-va2far wm-k"/><path class="wm-k x929q_bqy"/><path class="gdry08b-w wm-k"/><path class="sgonu929r wm-k"/><path class="sz969lb6f wm-k"/><path class="wm-shine y0wevo2ez"/><path class="ufb-ltsrk wm-a"/><path class="osiy47biv wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:umbrella"} {...others} />);
}

export default Component;
