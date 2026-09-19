import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/brwuu3bob.css';
import '../../css/f/fhwl3ee0w.css';
import '../../css/q/q1bjnfb8r.css';
import '../../css/v/v9sc_5nqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="brwuu3bob"/><path class="fhwl3ee0w"/><path class="q1bjnfb8r"/><path class="v9sc_5nqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:qr-code"} {...others} />);
}

export default Component;
