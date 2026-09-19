import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzfcsg_hz.css';
import '../../css/d/dlbtd9a4s.css';
import '../../css/r/rxmb4ab0j.css';
import '../../css/i/iiyu25bgn.css';
import '../../css/n/n1tuocb2f.css';
import '../../css/k/kpht5ebko.css';
import '../../css/x/xkow8ybyr.css';

const viewBox = {"width":301,"height":380};
const content = `<g class="ft5dv1b6b"><path class="xzfcsg_hz"/><path class="dlbtd9a4s"/><path class="rxmb4ab0j"/><ellipse class="iiyu25bgn"/><path class="n1tuocb2f"/><path class="kpht5ebko"/><path class="xkow8ybyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:np"} {...others} />);
}

export default Component;
