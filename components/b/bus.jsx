import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/l0o_79hvy.css';
import '../../css/i/icnhinblg.css';
import '../../css/m/mthm-ftsf.css';
import '../../css/i/ieqf_jbnc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="l0o_79hvy"/><path class="icnhinblg"/><path class="mthm-ftsf"/><path class="ieqf_jbnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:bus"} {...others} />);
}

export default Component;
