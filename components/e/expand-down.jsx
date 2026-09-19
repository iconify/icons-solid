import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/h/hvve69bkn.css';
import '../../css/l/l88i7dblt.css';
import '../../css/t/tzpiabczw.css';
import '../../css/t/tw29b1vdl.css';
import '../../css/o/o594j2bhc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="hvve69bkn"/><path class="l88i7dblt"/><path class="tzpiabczw"/><path class="tw29b1vdl"/><path class="o594j2bhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:expand-down"} {...others} />);
}

export default Component;
