import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dc-opbbnk.css';
import '../../css/f/fqnkg2bwc.css';
import '../../css/f/f99jusbwg.css';
import '../../css/o/o6n94jakv.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="dc-opbbnk"/><path class="fqnkg2bwc"/><path class="f99jusbwg"/><path class="o6n94jakv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:server-hand"} {...others} />);
}

export default Component;
