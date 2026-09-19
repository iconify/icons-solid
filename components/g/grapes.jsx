import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q7d6r45if.css';
import '../../css/b/bmeh6ut8b.css';
import '../../css/i/iot5hrb8y.css';
import '../../css/b/b2a1zvboh.css';
import '../../css/f/f-n_988_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q7d6r45if"/><path class="bmeh6ut8b"/><path class="iot5hrb8y"/><path class="b2a1zvboh"/><path class="f-n_988_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:grapes"} {...others} />);
}

export default Component;
