import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zmcqrp_iv.css';
import '../../css/a/ax2murb2d.css';
import '../../css/q/qg-fvrb0k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="zmcqrp_iv"/><path class="ax2murb2d"/><path class="qg-fvrb0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:entertainment"} {...others} />);
}

export default Component;
