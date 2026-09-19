import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aqbnf8b1b.css';
import '../../css/m/mf46d6irg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="aqbnf8b1b"/><path class="mf46d6irg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:binary-code"} {...others} />);
}

export default Component;
