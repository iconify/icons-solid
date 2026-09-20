import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r6hb92bmg.css';
import '../../css/c/cwmc7s4wk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="r6hb92bmg"/><path class="cwmc7s4wk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:bell-set-timer"} {...others} />);
}

export default Component;
