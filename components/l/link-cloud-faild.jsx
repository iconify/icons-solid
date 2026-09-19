import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mi2wm9b-w.css';
import '../../css/q/q-retccrz.css';
import '../../css/c/cym3znlvx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="mi2wm9b-w"/><path class="q-retccrz"/><path class="cym3znlvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:link-cloud-faild"} {...others} />);
}

export default Component;
