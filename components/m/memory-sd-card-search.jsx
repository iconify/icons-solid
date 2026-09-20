import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t03zpmbmc.css';
import '../../css/g/gj580ybou.css';
import '../../css/i/iirl5cb_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="t03zpmbmc"/><path class="gj580ybou"/><path class="iirl5cb_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:memory-sd-card-search"} {...others} />);
}

export default Component;
