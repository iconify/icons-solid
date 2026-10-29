import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/si8_5qf7r.css';
import '../../css/l/l_iz3-xvi.css';
import '../../css/f/f-xer0bys.css';
import '../../css/k/komu8bc7h.css';
import '../../css/m/m2si3ccdv.css';
import '../../css/k/kv46ygbec.css';
import '../../css/f/f1ub3fb3f.css';
import '../../css/d/dsl0jomde.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="si8_5qf7r wm-shadow"/><path class="l_iz3-xvi wm-k"/><path class="f-xer0bys wm-k"/><path class="komu8bc7h wm-k"/><path class="m2si3ccdv wm-k"/><path class="kv46ygbec wm-k"/><path class="f1ub3fb3f wm-shine"/><path class="dsl0jomde wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:virus"} {...others} />);
}

export default Component;
