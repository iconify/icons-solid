import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jbeyhdbgx.css';
import '../../css/h/hbaow-b7m.css';
import '../../css/d/dkcq8bbuu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jbeyhdbgx"/><path class="hbaow-b7m"/><path class="dkcq8bbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:taco-01"} {...others} />);
}

export default Component;
