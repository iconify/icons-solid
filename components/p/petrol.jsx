import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/k/kjic1aczr.css';
import '../../css/e/e6pm4obja.css';
import '../../css/l/lume5fb4x.css';
import '../../css/m/m5rmsl-7t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="kjic1aczr"/><path class="e6pm4obja"/><path class="lume5fb4x"/><path class="m5rmsl-7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:petrol"} {...others} />);
}

export default Component;
