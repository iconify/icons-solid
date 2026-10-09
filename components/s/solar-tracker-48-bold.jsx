import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqs_8pbmm.css';
import '../../css/k/k67ptjbwx.css';
import '../../css/n/nvywobb1g.css';
import '../../css/p/pse5d0bkp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qqs_8pbmm"/><path class="k67ptjbwx"/><path class="nvywobb1g"/><path class="pse5d0bkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-tracker-48-bold"} {...others} />);
}

export default Component;
