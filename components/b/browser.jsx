import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/e/eht93h04u.css';
import '../../css/g/gce_c4baq.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="eht93h04u"/><path class="gce_c4baq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:browser"} {...others} />);
}

export default Component;
