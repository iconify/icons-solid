import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/favsm8bml.css';
import '../../css/i/iab0z3b6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="favsm8bml"/><path class="iab0z3b6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:google"} {...others} />);
}

export default Component;
