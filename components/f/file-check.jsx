import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lm-obo21n.css';
import '../../css/q/qqd3c-b7h.css';
import '../../css/h/hc01h_81m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lm-obo21n"/><path class="qqd3c-b7h"/><path class="hc01h_81m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-check"} {...others} />);
}

export default Component;
