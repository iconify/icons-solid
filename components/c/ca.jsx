import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qg9uzw0lp.css';
import '../../css/u/u2p6dmkpb.css';
import '../../css/g/g0dhlfd-h.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="qg9uzw0lp"/><path class="u2p6dmkpb"/><path class="g0dhlfd-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ca"} {...others} />);
}

export default Component;
