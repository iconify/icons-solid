import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qc8ffrbjk.css';
import '../../css/t/tqtl-db9k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="qc8ffrbjk"/><path class="tqtl-db9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:binoculars"} {...others} />);
}

export default Component;
