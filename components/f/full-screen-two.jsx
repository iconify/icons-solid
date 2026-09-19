import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/px_yz9bks.css';
import '../../css/m/m7j9c9bcj.css';
import '../../css/d/dkr0sjjql.css';
import '../../css/k/kqh6c4tdn.css';
import '../../css/q/qb87-k4qw.css';
import '../../css/r/rm09j9qby.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="px_yz9bks"/><path class="m7j9c9bcj"/><path class="dkr0sjjql"/><path class="kqh6c4tdn"/><path class="qb87-k4qw"/><path class="rm09j9qby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:full-screen-two"} {...others} />);
}

export default Component;
