import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ywpke0u1d.css';
import '../../css/i/inh42bc0g.css';
import '../../css/k/kug68kbzk.css';
import '../../css/y/y6bnrtisz.css';
import '../../css/v/v5c-x9b-s.css';
import '../../css/o/ol7ywib0m.css';
import '../../css/b/b3aijsbiu.css';
import '../../css/o/ovra2zbsk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-a ywpke0u1d"/><path class="inh42bc0g wm-a"/><path class="kug68kbzk wm-a"/><path class="wm-k y6bnrtisz"/><path class="v5c-x9b-s wm-k"/><path class="ol7ywib0m wm-k"/><path class="b3aijsbiu wm-shine"/><path class="ovra2zbsk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:dollar-sign"} {...others} />);
}

export default Component;
