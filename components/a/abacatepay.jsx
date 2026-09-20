import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xn9d2sc7l.css';
import '../../css/q/qg239nbdb.css';
import '../../css/n/nb4ax_b1e.css';
import '../../css/a/aq6-kc63v.css';
import '../../css/u/u4gm9xb0y.css';

const viewBox = {"width":29,"height":30};
const content = `<g class="ft5dv1b6b"><path class="xn9d2sc7l"/><path class="qg239nbdb"/><path class="nb4ax_b1e"/><path class="aq6-kc63v"/><path class="u4gm9xb0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:abacatepay"} {...others} />);
}

export default Component;
