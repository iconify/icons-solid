import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpj65fbae.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/i/i3vxk5brn.css';
import '../../css/q/quehvibls.css';
import '../../css/n/nnt1b1vcc.css';
import '../../css/a/alou6fbak.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="hpj65fbae"/><g class="kdz4acc8r"><circle class="i3vxk5brn"/><path class="quehvibls"/><path class="nnt1b1vcc"/><path class="alou6fbak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rounded-symbol-for-shou"} {...others} />);
}

export default Component;
