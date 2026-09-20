import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/k/ka8l4va7q.css';
import '../../css/v/vrtp8gbgb.css';
import '../../css/w/wh_-q3brf.css';
import '../../css/u/u_j59b26s.css';
import '../../css/d/d4mf_6n7s.css';
import '../../css/z/zjkwwcx1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="ka8l4va7q"/><path class="vrtp8gbgb"/><path class="wh_-q3brf"/><path class="u_j59b26s"/><path class="d4mf_6n7s"/><path class="zjkwwcx1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-fog-linear"} {...others} />);
}

export default Component;
