import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/v/v831kxbiv.css';
import '../../css/r/rvfrpacpl.css';
import '../../css/w/wor2q1b1o.css';
import '../../css/j/j8-wnh-6d.css';
import '../../css/z/zc0km7fgg.css';
import '../../css/w/wqj55ibat.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="v831kxbiv"/><path class="rvfrpacpl"/><path class="wor2q1b1o"/><path class="j8-wnh-6d"/><path class="zc0km7fgg"/><path class="wqj55ibat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:oil-industry"} {...others} />);
}

export default Component;
