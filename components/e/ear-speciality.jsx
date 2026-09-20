import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/ipozopb3w.css';
import '../../css/q/qcq5enbfl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ipozopb3w"/><path class="qcq5enbfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ear-speciality"} {...others} />);
}

export default Component;
