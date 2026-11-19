import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwnjxxngd.css';
import '../../css/k/k3tln2m6v.css';
import '../../css/t/tdt80vbxu.css';
import '../../css/e/e_91t0o5m.css';
import '../../css/d/djx360byf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qwnjxxngd"/><path class="k3tln2m6v"/><path class="tdt80vbxu"/><path class="e_91t0o5m"/><path class="djx360byf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-cloud"} {...others} />);
}

export default Component;
