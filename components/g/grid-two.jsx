import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/l/lyard7xsu.css';
import '../../css/k/kp002wbny.css';
import '../../css/v/vupfj4bbw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="lyard7xsu"/><path class="kp002wbny"/><path class="vupfj4bbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:grid-two"} {...others} />);
}

export default Component;
