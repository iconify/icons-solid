import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cm8y1-y0x.css';
import '../../css/h/hhijlij2o.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="cm8y1-y0x"/><path class="hhijlij2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:log-in-double-arrow-2"} {...others} />);
}

export default Component;
