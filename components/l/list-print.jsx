import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/f/feh8oabyd.css';
import '../../css/d/dz1omvb8k.css';
import '../../css/o/oi4odfbaz.css';
import '../../css/s/ssvr-sble.css';
import '../../css/v/vbahp1bvw.css';
import '../../css/f/f-auj7bix.css';
import '../../css/o/o0dq1pbzh.css';
import '../../css/j/jgrsx5bbj.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><g class="nctb2ac4r"><circle class="feh8oabyd"/><circle class="dz1omvb8k"/><circle class="oi4odfbaz"/><path class="ssvr-sble"/></g><circle class="vbahp1bvw"/><circle class="f-auj7bix"/><circle class="o0dq1pbzh"/><path class="jgrsx5bbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:list-print"} {...others} />);
}

export default Component;
