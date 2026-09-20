import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rl-fbwnpe.css';
import '../../css/q/qhz8-fyzm.css';
import '../../css/o/obibidbtv.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rl-fbwnpe"/><path class="qhz8-fyzm"/><path class="obibidbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:film-roll-1-flat"} {...others} />);
}

export default Component;
