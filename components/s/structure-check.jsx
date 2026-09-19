import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eqfieabcg.css';
import '../../css/f/ff22j4bof.css';
import '../../css/m/mcl7h3lrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="eqfieabcg"/><path class="ff22j4bof"/><path class="mcl7h3lrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:structure-check"} {...others} />);
}

export default Component;
