import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/aj1v0cbzm.css';
import '../../css/o/ok5_r338q.css';
import '../../css/k/ko8h4rbes.css';
import '../../css/t/t1i6xe2wc.css';
import '../../css/v/vy2mf3urb.css';
import '../../css/e/ew2bixbrz.css';
import '../../css/v/v9ed1bbem.css';
import '../../css/i/i_rungbrn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="aj1v0cbzm"/><path class="ok5_r338q"/><path class="ko8h4rbes"/><path class="t1i6xe2wc"/><path class="vy2mf3urb"/><path class="ew2bixbrz"/><path class="v9ed1bbem"/><path class="i_rungbrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:off-screen-one"} {...others} />);
}

export default Component;
