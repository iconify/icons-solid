import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/r/r9tah7b1g.css';
import '../../css/v/vslmeyilf.css';
import '../../css/u/ukvrew15t.css';
import '../../css/c/czo-h_4eq.css';
import '../../css/d/dzlc8xbdh.css';
import '../../css/w/wnhrd9i-w.css';
import '../../css/f/f1oq7ob-f.css';
import '../../css/j/j_t_m2bdt.css';
import '../../css/l/lfw5fobrj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="r9tah7b1g"/><path class="vslmeyilf"/><path class="ukvrew15t"/><path class="czo-h_4eq"/><path class="dzlc8xbdh"/><path class="wnhrd9i-w"/><path class="f1oq7ob-f"/><path class="j_t_m2bdt"/><path class="lfw5fobrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:yacht"} {...others} />);
}

export default Component;
