import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/olmr4lb5h.css';
import '../../css/w/wxnbb-vib.css';
import '../../css/f/fbavsjg8l.css';
import '../../css/w/wxky3ehdv.css';
import '../../css/g/g5l-wdttw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="olmr4lb5h"/><path class="wxnbb-vib"/><path class="fbavsjg8l"/><path class="wxky3ehdv"/><path class="g5l-wdttw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fingerprint"} {...others} />);
}

export default Component;
