import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgl5y72wm.css';
import '../../css/m/mgti0_btg.css';
import '../../css/a/awf6kabnh.css';
import '../../css/s/st53awbpp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="pgl5y72wm"/><path class="mgti0_btg"/><path class="awf6kabnh"/><path class="st53awbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:canoe"} {...others} />);
}

export default Component;
