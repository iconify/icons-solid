import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idl7wpbyp.css';
import '../../css/e/efu847g9z.css';
import '../../css/n/n0o9dm79r.css';
import '../../css/o/ozoac8zjm.css';
import '../../css/q/q3x66zbud.css';
import '../../css/x/xlpie1bbw.css';
import '../../css/f/f3ry7ub8j.css';
import '../../css/g/g0r8e-bsi.css';
import '../../css/l/l61z6yb2b.css';
import '../../css/b/blztjabwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="idl7wpbyp wm-shadow"/><path class="efu847g9z wm-k"/><path class="n0o9dm79r wm-k"/><path class="ozoac8zjm wm-k"/><path class="q3x66zbud wm-k"/><path class="wm-k xlpie1bbw"/><path class="f3ry7ub8j wm-shine"/><path class="g0r8e-bsi wm-a"/><path class="l61z6yb2b wm-a"/><path class="blztjabwz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:timer-reset"} {...others} />);
}

export default Component;
