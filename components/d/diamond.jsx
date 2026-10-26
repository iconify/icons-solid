import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/r/rrllyrdux.css';
import '../../css/w/wen9dw8oq.css';
import '../../css/o/ofq-74nov.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="rrllyrdux"/><path class="wen9dw8oq"/><path class="ofq-74nov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:diamond"} {...others} />);
}

export default Component;
