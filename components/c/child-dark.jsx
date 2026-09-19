import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l25ha_ecc.css';
import '../../css/e/e6j9nq9rx.css';
import '../../css/r/rigryabub.css';
import '../../css/v/vfckvwbar.css';
import '../../css/k/k1nbogbdc.css';
import '../../css/r/rfzu-sjnr.css';
import '../../css/i/isc0hbc0g.css';
import '../../css/v/vudlxhv6m.css';
import '../../css/t/tf0idgbjt.css';
import '../../css/c/cycyhk-bn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="l25ha_ecc"/><path class="e6j9nq9rx"/><path class="rigryabub"/><path class="vfckvwbar"/><path class="k1nbogbdc"/><path class="rfzu-sjnr"/><path class="isc0hbc0g"/><path class="vudlxhv6m"/><path class="tf0idgbjt"/><path class="cycyhk-bn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:child-dark"} {...others} />);
}

export default Component;
