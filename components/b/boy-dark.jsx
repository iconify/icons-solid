import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/slmkh8l6f.css';
import '../../css/u/udt0swlhp.css';
import '../../css/p/pep9l_b1w.css';
import '../../css/v/vfckvwbar.css';
import '../../css/k/k1nbogbdc.css';
import '../../css/r/rfzu-sjnr.css';
import '../../css/i/isc0hbc0g.css';
import '../../css/v/vudlxhv6m.css';
import '../../css/t/tf0idgbjt.css';
import '../../css/g/gdh17bbvp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="slmkh8l6f"/><path class="udt0swlhp"/><path class="pep9l_b1w"/><path class="vfckvwbar"/><path class="k1nbogbdc"/><path class="rfzu-sjnr"/><path class="isc0hbc0g"/><path class="vudlxhv6m"/><path class="tf0idgbjt"/><path class="gdh17bbvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:boy-dark"} {...others} />);
}

export default Component;
