import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hz3-nmbhf.css';
import '../../css/l/l0gl311-i.css';
import '../../css/q/qp1nq7i5t.css';
import '../../css/g/gmt8_imjx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hz3-nmbhf"/><path class="l0gl311-i"/><path class="qp1nq7i5t"/><path class="gmt8_imjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:envelope"} {...others} />);
}

export default Component;
