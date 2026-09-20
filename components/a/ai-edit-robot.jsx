import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/rnhggru9c.css';
import '../../css/m/mhqaflbgf.css';
import '../../css/f/fcc0_m7rw.css';
import '../../css/s/s4ykfg25t.css';
import '../../css/l/l_703jk3c.css';
import '../../css/u/u0xe1hxxg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="rnhggru9c"/><path class="mhqaflbgf"/><path class="fcc0_m7rw"/><path class="s4ykfg25t"/><path class="l_703jk3c"/><path class="u0xe1hxxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ai-edit-robot"} {...others} />);
}

export default Component;
