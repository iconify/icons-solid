import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q8qk1ms1c.css';
import '../../css/u/u5ya57buj.css';
import '../../css/e/ev2kjdshl.css';
import '../../css/r/rakuzgb5h.css';
import '../../css/v/vlz_o1knu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q8qk1ms1c"/><path class="u5ya57buj"/><path class="ev2kjdshl"/><path class="rakuzgb5h"/><path class="vlz_o1knu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cassette-2-line-duotone"} {...others} />);
}

export default Component;
