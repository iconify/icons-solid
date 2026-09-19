import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qfpsajb-o.css';
import '../../css/l/l0tvmr4-e.css';
import '../../css/t/tq2sis96r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="qfpsajb-o"/><path class="l0tvmr4-e"/><path class="tq2sis96r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:webcam"} {...others} />);
}

export default Component;
