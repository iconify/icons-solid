import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w-_7j2b_b.css';
import '../../css/t/tghze73ng.css';
import '../../css/u/u26uafbbw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="w-_7j2b_b"/><path class="tghze73ng"/><path class="u26uafbbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:monetization-mouse"} {...others} />);
}

export default Component;
