import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hl3svbcdj.css';
import '../../css/x/xxvbpibda.css';
import '../../css/y/yervk3lwl.css';
import '../../css/k/kmyud_-jp.css';
import '../../css/t/t7tcbzb1p.css';
import '../../css/y/y6a8gcbbg.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="hl3svbcdj"/><circle class="xxvbpibda"/><circle class="yervk3lwl"/><circle class="kmyud_-jp"/><circle class="t7tcbzb1p"/><circle class="y6a8gcbbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:midiplug"} {...others} />);
}

export default Component;
