import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/crc1j1oau.css';
import '../../css/s/snseyq-jg.css';
import '../../css/n/nrw4g0yux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="crc1j1oau"/><circle class="snseyq-jg"/><path class="nrw4g0yux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ear-rings-03"} {...others} />);
}

export default Component;
