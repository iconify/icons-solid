import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/enm-gqbsg.css';
import '../../css/e/eawxp5b_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="enm-gqbsg"/><path class="eawxp5b_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flip-top"} {...others} />);
}

export default Component;
