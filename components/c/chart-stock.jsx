import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/s/s9avtu-0g.css';
import '../../css/o/okvxh899v.css';
import '../../css/g/gor4wbcao.css';
import '../../css/c/ckgpe_bsb.css';
import '../../css/t/tq-bhxbxu.css';
import '../../css/t/tdffaphfa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="s9avtu-0g"/><path class="okvxh899v"/><path class="gor4wbcao"/><path class="ckgpe_bsb"/><path class="tq-bhxbxu"/><path class="tdffaphfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:chart-stock"} {...others} />);
}

export default Component;
