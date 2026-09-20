import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyt2l_voi.css';
import '../../css/y/yn6p1eb0k.css';
import '../../css/u/u5s7reayv.css';
import '../../css/c/c41e271zx.css';
import '../../css/c/cqchpb_dl.css';
import '../../css/h/hzhb0bcwn.css';
import '../../css/m/mal5nabbb.css';
import '../../css/x/x5fyvquan.css';
import '../../css/u/ukzwolvdp.css';
import '../../css/v/vzooosfab.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="tyt2l_voi"/><path class="yn6p1eb0k"/><circle class="u5s7reayv"/><circle class="c41e271zx"/><path class="cqchpb_dl"/><g class="hzhb0bcwn"><circle class="mal5nabbb"/><circle class="x5fyvquan"/><circle class="ukzwolvdp"/><circle class="vzooosfab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:nazar-amulet"} {...others} />);
}

export default Component;
