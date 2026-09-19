import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/c03ka53pv.css';
import '../../css/v/vsrxpre8m.css';
import '../../css/c/cegerabtm.css';
import '../../css/f/fp98cjbpx.css';
import '../../css/z/zr97ach-s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="c03ka53pv"/><path class="vsrxpre8m"/><path class="cegerabtm"/><path class="fp98cjbpx"/><path class="zr97ach-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chicken-zodiac"} {...others} />);
}

export default Component;
