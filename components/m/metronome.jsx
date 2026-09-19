import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pw778mbpo.css';
import '../../css/n/n-fw9sbnf.css';
import '../../css/g/gqayovb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pw778mbpo"/><circle class="n-fw9sbnf"/><path class="gqayovb7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:metronome"} {...others} />);
}

export default Component;
